'use client'

import React from 'react'
import { useState, useEffect } from 'react'

const Date = ({ date, setDate }) => {
    

    const OnDateChangeHandler = (e) => {
        console.log(e.target.value);
        setDate(e.target.value);
    }

    const TodayDate = new globalThis.Date();
    const TodayDateString = TodayDate.toISOString().split('T')[0];

    return (
        <div className='flex w-full justify-end px-5'>
            <div className='flex w-full items-center justify-end'>
                <p className=''>Date = <input className="bg-transparent outline-none text-white w-min" value={date} type="date" name="date" id="" min="1995-06-16" max={TodayDateString} onChange={OnDateChangeHandler} /></p>
            </div>
            {/* <button className="rounded-lg flex items-center text-center download max-md:mt-3 bg-black xl:w-[100%] max-md:w-full outline border-white border p-3 font-medium text-[18px]">Apply</button> */}
        </div>
    )
}

export default Date