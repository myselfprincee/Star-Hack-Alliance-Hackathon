'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import useStatesStore from '../../Store/Store';

const NasaProjectDetails = () => {
    const increaseLimitBy = 10;
    const initialOffset = 0;
    const [limit, setLimit] = useState(increaseLimitBy);
    const [offset, setOffset] = useState(initialOffset);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [message, setMessage] = useState('');
    const { setProjectId } = useStatesStore();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const apiUrl = `https://data.nasa.gov/resource/bq5k-hbdz.json?$limit=${limit}&$offset=${offset}`;

            try {
                const response = await fetch(apiUrl);
                if (response.status === 503) {
                    setMessage("The Data sources are under maintenance. Sorry for the inconvenience, we will be back soon.");
                } else if (!response.ok) {
                    console.log('api response was not ok.')
                }
                const result = await response.json();
                const processedResult = result.map(item => ({
                    ...item,
                    description: item.description ? item.description.slice(0, 200) : ''
                }));
                // if (data.length > 0){
                setData(prevData => [...prevData, ...processedResult]);
                // }
                // setData(processedResult);
                setMessage('');
            } catch (error) {
                console.error(error);
                setMessage('An error occurred while fetching data.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [increaseLimitBy, offset]);

    // const truncateText = (text, length) => {
    //     return text.length > length ? text.substring(0, length) + "..." : text;
    // };

    const loadMoreData = () => {
        setOffset(prevOffset => prevOffset + increaseLimitBy);
        setOffset(prevOffset => prevOffset + increaseLimitBy);
    };

    return (
        <>
            <div className="mt-20 text-white w-[90%] mx-auto">
            <div className='flex gap-2 text-white flex-wrap opacity-50 mb-5 left-0 right-0 mx-auto'><Link href={"/"}>Home </Link><p>{` > `}</p><Link href={"/get-space-knowledge"}> Get Space Knowledge</Link><p>{`>`}</p><Link href={"/get-space-knowledge/nasa-proj-details"}>NASA Project Details</Link></div>
                <h1 className="text-[20px] my-5">Publicly Published NASA projects</h1>
                {message &&
                    <>
                        <svg className='w-50 h-50' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            {/* SVG Content */}
                        </svg>
                        <p>{message}</p>
                    </>
                }
                <div className="mb-10 lg:flex lg:flex-wrap lg:justify-between lg:w-full">
                    {data.map((event, index) => (
                        <div
                            key={index}
                            className="bg-white lg:w-[48%] text-black my-4 p-3 rounded-lg"
                            onClick={() => setProjectId(event.projectid)}
                        >
                            <Link
                                href={`/get-space-knowledge/nasa-proj-details/${event.projectid}`}
                                className="flex flex-col h-full"
                            >
                                <div className="flex flex-col flex-grow">
                                    <p className='font-semibold my-2 text-[1.3rem]'>{event.title}</p>
                                    <p className="text-[10px] opacity-50">{event.lastupdated}</p>
                                    <p className="text-[10px] opacity-50">{event.responsiblenasaprogram}</p>
                                    <p className="text-[10px] opacity-50">{event.primarytaxonomy}</p>
                                    <p className='mt-4' dangerouslySetInnerHTML={{ __html: `${event.description}...` }}></p>
                                </div>
                                <button className="text-white bg-black p-3 rounded-lg mt-5 w-full">Read More</button>
                            </Link>
                        </div>
                    ))}
                </div>

                {!message && (
                    <button
                        disabled={loading}
                        onClick={loadMoreData}
                        className={`transition-all w-full p-3 bg-white text-black mb-6 font-semibold rounded-lg ${loading && "opacity-70"}`}
                    >
                        {loading ? (
                            <svg aria-hidden="true" className="w-6 h-6 left-0 right-0 mx-auto text-gray-200 animate-spin dark:text-gray-300 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        ) : (
                            <p>Load More</p>
                        )}
                    </button>
                )}
            </div>
        </>
    );
};

export default NasaProjectDetails;
