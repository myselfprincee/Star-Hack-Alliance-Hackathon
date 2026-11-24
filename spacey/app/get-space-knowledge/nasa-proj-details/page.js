'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const PAGE_SIZE = 20;

async function fetchProjectPage(offset, query, signal) {
    const params = new URLSearchParams({
        limit: String(PAGE_SIZE),
        offset: String(offset),
        q: query,
    });
    const response = await fetch(`/api/nasa-projects?${params}`, { signal });
    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.error || 'NASA project data is temporarily unavailable.');
    }

    return result;
}

const NasaProjectDetails = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const queryRef = useRef(query);
    const [total, setTotal] = useState(0);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        let isCurrentRequest = true;

        setData([]);
        setOffset(0);
        setHasMore(true);
        setMessage('');
        setLoading(true);

        const timeout = setTimeout(async () => {
            try {
                const result = await fetchProjectPage(0, query, controller.signal);
                if (!isCurrentRequest || queryRef.current !== query) return;

                setData(result.projects);
                setTotal(result.total);
                setOffset(result.nextOffset);
                setHasMore(result.hasMore);
            } catch (error) {
                if (
                    error.name !== 'AbortError' &&
                    isCurrentRequest &&
                    queryRef.current === query
                ) {
                    console.error('Could not load NASA projects:', error);
                    setMessage(error.message || 'NASA project data is temporarily unavailable.');
                }
            } finally {
                if (isCurrentRequest) setLoading(false);
            }
        }, 200);

        return () => {
            isCurrentRequest = false;
            clearTimeout(timeout);
            controller.abort();
        };
    }, [query]);

    const loadMoreData = async () => {
        if (loading || loadingMore || !hasMore) return;

        const searchQuery = queryRef.current;
        setLoadingMore(true);
        try {
            const result = await fetchProjectPage(offset, searchQuery);
            if (queryRef.current !== searchQuery) return;

            setData((previous) => [...previous, ...result.projects]);
            setOffset(result.nextOffset);
            setHasMore(result.hasMore);
        } catch (error) {
            if (queryRef.current !== searchQuery) return;
            console.error('Could not load more NASA projects:', error);
            setMessage(error.message || 'Could not load more projects. Please try again.');
        } finally {
            setLoadingMore(false);
        }
    };

    return (
        <div className="mt-20 text-white w-[90%] mx-auto mb-10">
            <div className="flex gap-2 text-white flex-wrap opacity-50 mb-5">
                <Link href="/">Home</Link>
                <span aria-hidden="true">&gt;</span>
                <Link href="/get-space-knowledge">Get Space Knowledge</Link>
                <span aria-hidden="true">&gt;</span>
                <span>NASA Project Details</span>
            </div>

            <h1 className="text-[20px] my-5">Publicly Published NASA Projects</h1>
            <p className="mb-4 opacity-70">
                {loading
                    ? 'Loading the NASA TechPort project directory...'
                    : `Browse ${total.toLocaleString()} public projects from NASA TechPort.`}
            </p>

            <label className="block mb-6" htmlFor="project-search">
                <span className="sr-only">Search NASA projects</span>
                <input
                    id="project-search"
                    type="search"
                    value={query}
                    onChange={(event) => {
                        queryRef.current = event.target.value;
                        setQuery(event.target.value);
                    }}
                    placeholder="Search titles, descriptions, programs, or taxonomy"
                    className="w-full rounded-lg bg-white p-3 text-black outline-offset-2"
                />
            </label>

            {message && (
                <p role="alert" className="mb-5 rounded-lg bg-white p-4 text-black">
                    {message}
                </p>
            )}

            {loading && data.length === 0 && (
                <p role="status" className="my-8">Loading NASA projects...</p>
            )}

            {!loading && !message && data.length === 0 && (
                <p className="my-8">No projects match that search.</p>
            )}

            <div className="mb-10 lg:flex lg:flex-wrap lg:justify-between">
                {data.map((project) => (
                    <article
                        key={project.projectId}
                        className="bg-white lg:w-[48%] text-black my-4 p-4 rounded-lg"
                    >
                        <Link
                            href={`/get-space-knowledge/nasa-proj-details/${project.projectId}`}
                            className="block"
                        >
                            <h2 className="font-semibold my-2 text-[1.3rem]">
                                {project.title}
                            </h2>
                        </Link>
                        <p className="text-xs opacity-60">
                            {project.lastUpdated
                                ? `Last updated ${new Date(project.lastUpdated).toLocaleDateString()}`
                                : 'Update date unavailable'}
                        </p>
                        {project.program && (
                            <p className="text-xs opacity-70 mt-1">{project.program}</p>
                        )}
                        {project.taxonomy && (
                            <p className="text-xs opacity-70 mt-1">{project.taxonomy}</p>
                        )}
                        <p className="mt-4 whitespace-pre-line line-clamp-5">
                            {project.description || 'No project description is available.'}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3">
                            <Link
                                href={`/get-space-knowledge/nasa-proj-details/${project.projectId}`}
                                className="rounded-lg bg-black px-4 py-3 text-white"
                            >
                                Read project details
                            </Link>
                            <a
                                href={project.projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg border border-black px-4 py-3"
                            >
                                NASA TechPort
                            </a>
                        </div>
                    </article>
                ))}
            </div>

            {hasMore && !loading && (
                <button
                    disabled={loading || loadingMore}
                    onClick={loadMoreData}
                    className="transition-all w-full p-3 bg-white text-black mb-6 font-semibold rounded-lg disabled:opacity-70"
                >
                    {loadingMore ? 'Loading more projects...' : 'Load more projects'}
                </button>
            )}
        </div>
    );
};

export default NasaProjectDetails;
