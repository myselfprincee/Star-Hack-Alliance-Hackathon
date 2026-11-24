'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const ProjectID = () => {
    const params = useParams();
    const projectId = Array.isArray(params.projectid)
        ? params.projectid[0]
        : params.projectid;
    const [project, setProject] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        let isCurrentRequest = true;

        const fetchProject = async () => {
            setLoading(true);
            setError('');
            setProject(null);

            try {
                const response = await fetch(
                    `/api/nasa-projects/${encodeURIComponent(projectId)}`,
                    { signal: controller.signal },
                );
                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.error || 'Could not load this NASA project.');
                }

                if (isCurrentRequest) setProject(result.project);
            } catch (requestError) {
                if (requestError.name !== 'AbortError' && isCurrentRequest) {
                    console.error('Could not load NASA project details:', requestError);
                    setError(
                        requestError.message || 'NASA project details are unavailable.',
                    );
                }
            } finally {
                if (isCurrentRequest) setLoading(false);
            }
        };

        if (projectId) fetchProject();

        return () => {
            isCurrentRequest = false;
            controller.abort();
        };
    }, [projectId]);

    return (
        <main className="mt-20 text-white w-[90%] left-0 right-0 mb-10 mx-auto">
            <nav aria-label="Breadcrumb" className="flex gap-2 text-white flex-wrap opacity-50 mb-5">
                <Link href="/">Home</Link>
                <span aria-hidden="true">&gt;</span>
                <Link href="/get-space-knowledge">Get Space Knowledge</Link>
                <span aria-hidden="true">&gt;</span>
                <Link href="/get-space-knowledge/nasa-proj-details">NASA Projects</Link>
                <span aria-hidden="true">&gt;</span>
                <span>{projectId}</span>
            </nav>

            {loading && <p role="status">Loading NASA project details...</p>}
            {!loading && error && (
                <p role="alert" className="rounded-lg bg-white p-4 text-black">
                    {error}
                </p>
            )}

            {!loading && project && (
                <article>
                    <p className="opacity-70">
                        {[project.program, project.acronym].filter(Boolean).join(' · ')}
                    </p>
                    <h1 className="font-semibold text-[2rem] mt-2">{project.title}</h1>
                    {(project.startDate || project.endDate) && (
                        <p className="opacity-60 mt-3">
                            {[project.startDate, project.endDate].filter(Boolean).join(' – ')}
                        </p>
                    )}

                    <dl className="grid gap-4 sm:grid-cols-2 my-8">
                        {project.status && (
                            <div>
                                <dt className="opacity-60">Status</dt>
                                <dd>{project.status}</dd>
                            </div>
                        )}
                        {project.leadOrganization && (
                            <div>
                                <dt className="opacity-60">Lead organization</dt>
                                <dd>{project.leadOrganization}</dd>
                            </div>
                        )}
                        {project.taxonomy && (
                            <div>
                                <dt className="opacity-60">NASA technology taxonomy</dt>
                                <dd>{project.taxonomy}</dd>
                            </div>
                        )}
                    </dl>

                    {project.description && (
                        <section className="mt-8">
                            <h2 className="text-[1.7rem] font-semibold mb-3">Description</h2>
                            <p className="whitespace-pre-line leading-relaxed">
                                {project.description}
                            </p>
                        </section>
                    )}

                    {project.benefits && (
                        <section className="mt-10">
                            <h2 className="text-[1.7rem] font-semibold mb-3">
                                Anticipated Benefits
                            </h2>
                            <p className="whitespace-pre-line leading-relaxed">
                                {project.benefits}
                            </p>
                        </section>
                    )}

                    {project.technologyOutcomes.length > 0 && (
                        <section className="mt-10">
                            <h2 className="text-[1.7rem] font-semibold mb-3">
                                Technology Outcomes
                            </h2>
                            <ul className="space-y-4">
                                {project.technologyOutcomes.map((outcome, index) => (
                                    <li key={`${outcome.date}-${index}`}>
                                        {outcome.date && (
                                            <p className="opacity-60">{outcome.date}</p>
                                        )}
                                        <p className="whitespace-pre-line leading-relaxed">
                                            {outcome.details}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-10 rounded-lg bg-white px-5 py-3 text-black"
                    >
                        View on NASA TechPort
                    </a>
                </article>
            )}
        </main>
    );
};

export default ProjectID;
