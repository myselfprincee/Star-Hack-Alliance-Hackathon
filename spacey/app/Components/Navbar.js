'use client'

import React from 'react'
import { useSpring, animated } from '@react-spring/web';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import  useStatesStore  from '../Store/Store';

const Navbar = () => {

  const [scrollText, setScrollText] = useState('scroll_');
  const [navLogo, setNavLogo] = useState('spacewhy');
  const [firstTime, setFirstTime] = useState(true);
  const [display, setDisplay] = useState(false);

  const { isClicked, setIsClicked } = useStatesStore();

  const logoNames = ['spacewhy', 'spacewhy_', 'spacewh', 'spacewh_', 'spacew_', 'space_', 'spacey_', 'spacey'];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < logoNames.length) {
        setNavLogo(logoNames[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval); // Stop the interval when all names are set
      }
    }, 500);

    const scrollInterval = setInterval(() => {
      if (scrollText === 'scroll_') {
        setScrollText('scroll_down');
      } else {
        setScrollText('scroll_');
      }
    }
      , 10000);

    return () => {
      clearInterval(interval)
      localStorage.setItem('firstTime', false);
      setFirstTime(false);
    }; // Cleanup function to clear interval
  }, []);

  const springProps = useSpring({
    left: isClicked ? '0' : '100%',
    reverse: isClicked,
  });

  const showDialog = useSpring({
    opacity: isClicked ? 1 : 0,
    transform: isClicked ? 'translateY(0%)' : 'translateY(100%)',
  });

  const handleAnimationEnd = () => {
    if (!isClicked) {
      setDisplay(false);
    }
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    setDisplay(true);
  };

  return (
    <>
      <nav className='p-2 px-4 navbar fixed flex justify-between w-full items-center z-[12] top-0 left-0'>
        <div>
          <Link href={"/"}><p className='font-[Fago] bg-transparent font-bold italic text-white text-[2rem]'>{navLogo}</p></Link>
        </div>
        <div className='flex flex-col gap-[6px] relative z-[11]' onClick={handleClick} onAnimationEnd={handleAnimationEnd}>
          <div className='h-[2px] w-12 rounded-full bg-white'></div>
          <animated.div style={springProps} className='h-[2px] w-6 sticky right-0 rounded-full bg-white'></animated.div>
          <animated.div style={springProps} className='h-[2px] w-5 sticky right-0 rounded-full bg-white'></animated.div>
        </div>
      </nav>
      <animated.div style={showDialog} className={`fixed top-0 z-10 h-[100vh] right-0 bg-black w-full flex items-center justify-center`}>
        <ul className="text-center flex flex-col gap-4">
          <li>
            <Link onClick={()=>{setIsClicked(false);}} className="text-black text-[2rem] p-3 block font-[Fago] font-bold bg-white" href="/space-quiz">
              Space Games
            </Link>
          </li>
          <li>
            <Link onClick={()=>{setIsClicked(false);}} className="text-black p-3 block text-[2rem] font-[Fago] font-bold bg-white" href="/chat-with-spacebot">
              Chat with SpaceBot
            </Link>
          </li>
          <li>
            <Link onClick={()=>{setIsClicked(false);}} className="text-black p-3 block text-[2rem] font-[Fago] font-bold bg-white" href="/get-space-knowledge">
              Get Space Knowledge
            </Link>
          </li>
          <li>
            <Link onClick={()=>{setIsClicked(false);}} className="text-black p-3 block text-[2rem] font-[Fago] font-bold bg-white" href="/Spac">
              About This Project
            </Link>
          </li>
        </ul>
      </animated.div>

    </>
  )
}

export default Navbar