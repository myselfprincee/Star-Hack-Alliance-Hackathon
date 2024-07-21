'use client';

import { useEffect, useState } from 'react';
import useStatesStore from '../../../Store/Store';
import Link from 'next/link';

const ProjectID = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const { projectId } = useStatesStore();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://test.cors.workers.dev/?https://techport.nasa.gov/api/projects/${projectId}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
                console.log(result)
                setError(null); // Clear any previous errors
            } catch (error) {
                setError(error.message || 'An error occurred');
                setData(null); // Clear any previous data
            } finally {
                setLoading(false);
            }
        };

        if (projectId) {
            fetchData();
        }
    }, [projectId]);

    return (
        <div className='mt-20 text-white w-[90%] left-0 right-0 mb-10  mx-auto'>
            <div className='flex gap-2 text-white flex-wrap opacity-50 mb-5 left-0 right-0 mx-auto'><Link href={"/"}>Home </Link><p>{` > `}</p><Link href={"/get-space-knowledge"}> Get Space Knowledge</Link><p>{`>`}</p><Link href={"/get-space-knowledge/nasa-proj-details"}>NASA Project Details</Link><p>{`>`}</p><Link href={`/get-space-knowledge/nasa-proj-details/${projectId}`}>{projectId}</Link></div>
            {data && (
                <div>
                    <p>{data.project.program.title}</p>
                    <h1 className='font-semibold text-[2rem]'>{data.project.title}</h1>
                    <p className='opacity-50 mt-3'>{data.project.startDateString} - {data.project.endDateString}</p>
                    {/* Render other data properties as needed */}
                    <p>Status : {data.project.statusDescription}</p>

                    <h3 className='text-[1.7rem] mt-5 font-semibold'>Description</h3>
                    <p dangerouslySetInnerHTML={{ __html: data.project.description }}></p>
                    <h3 className='text-[1.7rem] mt-10 font-semibold'>Anticipated Benefits</h3>
                    <p className='' dangerouslySetInnerHTML={{ __html: data.project.benefits }}></p>
                </div>
            )}
        </div>
    );
};

export default ProjectID;
