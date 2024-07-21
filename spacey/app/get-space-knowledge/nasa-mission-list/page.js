'use client'

import missions from './mission'
import useStatesStore from '../../Store/Store'
import Link from 'next/link'

const NasaMissions = () => {

  const { setAlphabet } = useStatesStore()

  const alphabets = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'NUM'
  ];


  return (
    <>
      <div className='mt-20 text-white w-[90%] mx-auto'>
      <div className='flex gap-2 text-white flex-wrap opacity-50 mb-5 left-0 right-0 mx-auto'><Link href={"/"}>Home </Link><p>{` > `}</p><Link href={"/get-space-knowledge"}> Get Space Knowledge</Link><p>{`>`}</p><Link href={"/get-space-knowledge/nasa-mission-list"}>All NASA Missions</Link></div>
        <h1 className='font-semibold text-[20px] mt-5'>A TO Z Nasa Missions List</h1>

        <div className='bg-white max-h-[450px] h-fit animate-unfade text-black p-3 *:space-y-3 overflow-y-scroll my-6 rounded-lg mb-20 transition-all'>
          {renderMissions()}
        </div>
      </div>

      <div className='bg-white flex lg:justify-between max-xl:gap-5 overflow-x-auto p-2 lg:w-full fixed bottom-0 left-0 right-0'>
        {alphabets.map((alphabet, index) => (
          <button
            onClick={() => { setAlphabet(alphabet) }}
            key={index}
            className='max-xl:hover:bg-black group lg:focus:bg-black rounded-full transition-all flex items-center'
          >
            <p className='font-semibold text-[25px] px-4 group:focus:text-white max-xl:hover:text-white transition-all'>
              {alphabet}
            </p>
          </button>
        ))}
      </div>
    </>

  )
}


const renderMissions = () => {
  const { alphabet } = useStatesStore()
  const missionsForAlphabet = missions[alphabet] || [];
  if (!Array.isArray(missionsForAlphabet)) {
    return <p>No missions available.</p>;
  }

  return missionsForAlphabet.map((data, index) => (
    <p className='my-2 font-semibold' key={index}>
      <Link href={data.link} target="_blank" rel="noopener noreferrer">
        {data.name}
      </Link>
    </p>
  ));
};

export default NasaMissions