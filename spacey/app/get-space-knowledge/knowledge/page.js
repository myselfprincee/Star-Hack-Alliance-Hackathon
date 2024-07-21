'use client'

import data from './data.js'
import Markdown from 'react-markdown'
import gfm from 'remark-gfm'
import { useState, useEffect, use } from 'react'
import Link from 'next/link'
import useStatesStore from '../../Store/Store'

const Knowledge = () => {
  const [RandomData, setRandomData] = useState([])
  const [showNotification, setShowNotification] = useState(false)
  const { numArr , setNumArr, clearNumArr } = useStatesStore()

  const showData = () => {
    const number = Math.floor(Math.random() * data.length);

    if (numArr.length >= data.length) {
      console.log("All data has been shown. Resetting.");
      setShowNotification(true)
      clearNumArr()
      setTimeout(() => {
        setShowNotification(false)
      }, 3000);
      return;
    }

    if (numArr.includes(number)) {
      showData()
      return;
    }
    setNumArr(number)
    console.log(numArr)
    setRandomData(data[number])
  }
  useEffect(() => {
    showData()
  }, [])

  return (
    <div className='w-[90%] left-0 right-0 mx-auto mt-20'>
      {showNotification && <div className='text-black -translate-y-20 fixed bottom-0 z-50 bg-white p-3 outline outline-black w-[90%] rounded-lg'>All the data has been shown. Click the button again to repeat the shown data.</div>}
      <div className='flex gap-2 text-white flex-wrap opacity-50 mb-5 left-0 right-0 mx-auto'><Link href={"/"}>Home </Link><p>{` > `}</p><Link href={"/get-space-knowledge"}> Get Space Knowledge</Link><p>{`>`}</p><Link href={"/get-space-knowledge/knowledge"}>Knowledge</Link></div>
        <div className='text-white mb-28'>
          <h2 className='text-white text-[1.5rem] font-semibold'>{RandomData.question}</h2>
          <div className='w-[100%] my-6 text-wrap whitespace-pre break-words prose-img:rounded-lg prose-img:lg:w-[600px] '>
            <Markdown remarkPlugins={[gfm]}>{RandomData.answer}</Markdown>
          </div>
          <p className='italic text-[10px] opacity-50'>Source : {RandomData.source}</p>
        </div>

      <div className='w-full fixed bottom-0 bg-black py-4'>
        <button onClick={showData} className='bg-white p-2 w-[90%]'>{showNotification ? "Revise what you learnt" : `Refresh to learn something new`}</button>
      </div>
    </div>
  )
}

export default Knowledge