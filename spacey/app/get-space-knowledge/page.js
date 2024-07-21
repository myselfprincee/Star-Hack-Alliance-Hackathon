import React from 'react'
import Navbar from '../Components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

const GetSpaceKnowledge = () => {

    const ListObj = [
        {
            link : '/get-space-knowledge/apod',
            imgSrc: '/images/apod.jpg',
            title: 'Astronomy Picture of the day',
            description: "This provides daily unique pictures of space events and a beautiful explanation about the image."
        },
        {
            link: '/get-space-knowledge/knowledge',
            imgSrc: '/images/space.jpg',
            title: 'Knowledge About Space',
            description: "Get Random knowledge related to space. and some good space with from this awesome section."
        },
        {
            link: '/get-space-knowledge/nasa-mission-list',
            imgSrc: '/images/space.jpg',
            title: 'List of All NASA Missions',
            description: "Get A to Z List of NASA Missions and details about each mission."
        },
        {
            link: '/get-space-knowledge/nasa-proj-details',
            imgSrc: '/images/nasa.jpg',
            title: 'NASA Project Details',
            description: "List of all publicly published NASA projects. In-depth portfolio information, including details for each of the NASA projects."
        },
        {
            link: '/get-space-knowledge/meteorite-landings',
            imgSrc: '/images/Mars-meteorite.jpg',
            title: 'Meteorite Landings',
            description: "This Section contains information on all of the known meteorite landings."
        },
        // {
        //     imgSrc: '/images/asteroid.avif',
        //     title: 'Near Earth Objects',
        //     description: "Contains near earth Asteroid information. Search for Asteroids based on their closest approach date to Earth, lookup a specific Asteroid."
        // },
        // {
        //     imgSrc: '/images/spaceX.jpg',
        //     title: 'SpaceX Launches',
        //     description: "Details on SpaceX launches, including mission objectives, launch dates, and outcomes."
        // },
        // {
        //     imgSrc: '/images/telescope.jpg',
        //     title: 'Telescopes and Observatories',
        //     description: "Explore the world's leading telescopes and observatories, their discoveries, and how they are expanding our understanding of the universe."
        // },
        // {
        //     imgSrc: '/images/ISS.jpg',
        //     title: 'International Space Station (ISS)',
        //     description: "Learn about the International Space Station, its crew, missions, and the groundbreaking research being conducted in orbit."
        // },
        // {
        //     imgSrc: '/images/moonLanding.jpg',
        //     title: 'Historic Moon Landings',
        //     description: "A comprehensive overview of the historic moon landings, including the Apollo missions and future plans for lunar exploration."
        // },
        // {
        //     imgSrc: '/images/exoplanets.jpg',
        //     title: 'Exoplanets Discovery',
        //     description: "Information on newly discovered exoplanets and the methods scientists use to find planets beyond our solar system."
        // }
    ]

    return (
        <div className='mt-20'>
            <div className='w-[95%] flex flex-col justify-center left-0 right-0 mx-auto text-white'>
                <h1>{`Home > Get Space Knowledge`}</h1>
                <h3 className='mt-5 text-[18px]'>Here are the list of awesome knowledge you can get here.</h3>


                <div className='flex flex-col gap-7 my-6 lg:grid lg:grid-cols-2'>
                    {ListObj.map((card, index) => {
                        return (
                            <Link className='w-full' key={index} href={card.link || "/get-space-knowledge"}>
                            <div className='flex gap-3 transition-all hover:bg-white group hover:text-black p-2 rounded-md justify-between'>
                                <Image src={card.imgSrc} className='rounded-lg object-cover select-none pointer-events-none' width={50} height={50} />
                                <div className='w-[95%] select-none'>
                                    <h4>{card.title}</h4>
                                    <p className='text-[10px]'>{card.description}</p>
                                </div>
                                <svg className='items-center p-2 fill-current flex group-hover:text-black text-white' xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 256 256" ><path d="M9 2v1h3.293l-6.27 6.273.704.704L13 3.707V7h1V2zM4 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7l-1 1v4c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h4l1-1z" transform="scale(16)" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }} />
                                </svg>
                            </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default GetSpaceKnowledge;