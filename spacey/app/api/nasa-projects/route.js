import { nasaHtmlToText } from "../../lib/nasa-text.js";

const NASA_PROJECTS_URL =
  "https://spacey-nasa-api-proxy.princegupta.workers.dev/api/techport-rows";
const DEFAULT_PAGE_SIZE = 20;
const MAX_PAGE_SIZE = 50;

export async function GET(request) {
  const searchParams = new URL(request.url).searchParams;
  const rawLimit = searchParams.get("limit");
  const rawOffset = searchParams.get("offset");
  const query = (searchParams.get("q") ?? "").trim().toLowerCase();
  const limit = rawLimit === null ? DEFAULT_PAGE_SIZE : Number(rawLimit);
  const offset = rawOffset === null ? 0 : Number(rawOffset);

  if (
    !Number.isInteger(limit) ||
    limit < 1 ||
    limit > MAX_PAGE_SIZE ||
    !Number.isInteger(offset) ||
    offset < 0 ||
    offset > 20000 ||
    query.length > 100
  ) {
    return Response.json({ error: "Invalid project list parameters." }, { status: 400 });
  }

  let response;
  try {
    response = await fetch(NASA_PROJECTS_URL, { next: { revalidate: 3600 } });
  } catch (error) {
    console.error("Could not reach the NASA projects Worker:", error);
    return Response.json(
      { error: "NASA project data is temporarily unavailable." },
      { status: 502 },
    );
  }

  if (!response.ok) {
    console.error("NASA projects Worker returned HTTP", response.status);
    return Response.json(
      { error: "NASA project data is temporarily unavailable." },
      { status: 502 },
    );
  }

  let snapshot;
  try {
    snapshot = await response.json();
  } catch (error) {
    console.error("NASA projects Worker returned invalid JSON:", error);
    return Response.json(
      { error: "NASA project data could not be read." },
      { status: 502 },
    );
  }

  const columns = snapshot?.meta?.view?.columns;
  const rows = snapshot?.data;
  if (!Array.isArray(columns) || !Array.isArray(rows)) {
    console.error("NASA projects Worker returned an unexpected data shape.");
    return Response.json(
      { error: "NASA project data has an unexpected format." },
      { status: 502 },
    );
  }

  const fieldIndexes = new Map(columns.map((column, index) => [column.fieldName, index]));
  const requiredFields = [
    "projectid",
    "title",
    "description",
    "responsiblenasaprogram",
    "primarytaxonomy",
    "lastupdated",
  ];
  if (requiredFields.some((field) => !fieldIndexes.has(field))) {
    console.error("NASA projects Worker is missing required project columns.");
    return Response.json(
      { error: "NASA project data is missing required fields." },
      { status: 502 },
    );
  }

  const readField = (row, field) =>
    Array.isArray(row) ? row[fieldIndexes.get(field)] : row?.[field];
  const uniqueProjects = new Map();

  for (const row of rows) {
    const projectId = String(readField(row, "projectid") ?? "").trim();
    const title = String(readField(row, "title") ?? "").trim();
    if (!/^\d+$/.test(projectId) || !title || uniqueProjects.has(projectId)) continue;

    uniqueProjects.set(projectId, {
      projectId,
      title,
      description: nasaHtmlToText(readField(row, "description")),
      program: nasaHtmlToText(readField(row, "responsiblenasaprogram")),
      taxonomy: nasaHtmlToText(readField(row, "primarytaxonomy")),
      lastUpdated: String(readField(row, "lastupdated") ?? ""),
      projectUrl: `https://techport.nasa.gov/view/${projectId}`,
    });
  }

  const projects = [...uniqueProjects.values()].filter((project) => {
    if (!query) return true;
    return [
      project.title,
      project.description,
      project.program,
      project.taxonomy,
    ].some((value) => value.toLowerCase().includes(query));
  });
  const page = projects.slice(offset, offset + limit);
  const nextOffset = offset + page.length;

  return Response.json({
    projects: page,
    total: projects.length,
    nextOffset,
    hasMore: nextOffset < projects.length,
  });
}
