import { nasaHtmlToText } from "../../../lib/nasa-text.js";

export async function GET(_request, context) {
  const { projectId } = await context.params;
  if (!/^\d+$/.test(projectId)) {
    return Response.json({ error: "Invalid NASA project ID." }, { status: 400 });
  }

  let response;
  try {
    response = await fetch(
      `https://techport.nasa.gov/api/projects/${projectId}`,
      { next: { revalidate: 3600 } },
    );
  } catch (error) {
    console.error("Could not reach NASA TechPort:", error);
    return Response.json(
      { error: "NASA project details are temporarily unavailable." },
      { status: 502 },
    );
  }

  if (!response.ok) {
    console.error("NASA TechPort returned HTTP", response.status);
    return Response.json(
      { error: "NASA project details are temporarily unavailable." },
      { status: 502 },
    );
  }

  let result;
  try {
    result = await response.json();
  } catch (error) {
    console.error("NASA TechPort returned invalid JSON:", error);
    return Response.json(
      { error: "NASA project details could not be read." },
      { status: 502 },
    );
  }

  const project = result?.project;
  if (!project) {
    return Response.json({ error: "NASA project was not found." }, { status: 404 });
  }

  return Response.json({
    project: {
      projectId,
      title: project.title ?? "Untitled NASA project",
      acronym: project.acronym ?? "",
      program: project.program?.title ?? "",
      startDate: project.startDateString ?? project.startDate ?? "",
      endDate: project.endDateString ?? project.endDate ?? "",
      status:
        project.statusDescription ??
        project.status?.description ??
        project.status?.statusDescription ??
        (typeof project.status === "string" ? project.status : ""),
      description: nasaHtmlToText(project.description),
      benefits: nasaHtmlToText(project.benefits),
      leadOrganization: project.leadOrganization?.organizationName ?? "",
      taxonomy: project.primaryTx?.title ?? "",
      technologyOutcomes: Array.isArray(project.technologyOutcomes)
        ? project.technologyOutcomes
            .map((outcome) => ({
              date: outcome.technologyOutcomeDateString ?? "",
              details: nasaHtmlToText(outcome.details),
            }))
            .filter((outcome) => outcome.details)
        : [],
      projectUrl: `https://techport.nasa.gov/view/${projectId}`,
    },
  });
}
