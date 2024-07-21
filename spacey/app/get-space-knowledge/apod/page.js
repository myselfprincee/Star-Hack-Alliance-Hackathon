'use client'

import { useState, useEffect } from "react";
import Date from "../Date";
import GetRandomKnowledge from "../GetRandomKnowledge";

const KnowledgePage = () => {
  const nowDate = new globalThis.Date();
  const [date, setDate] = useState(nowDate.toISOString().split('T')[0]);
  const [data, setData] = useState([]);
  const [download, setDownload] = useState("Download Now");
  const [imageLoaded, setImageLoaded] = useState(false);
  console.log(date)

  console.log(imageLoaded);

  useEffect(() => {
    setInterval(() => {
      setDownload("Download Now");
  }, 5000);
    const fetchData = async () => {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&date=${date}`, { next: { revalidate: 3600 } });
      setData(await response.json());
      console.log(data);
      return data;
    }
    fetchData();
  }, [date]);

  return (
    <>
      <div className="mt-20 flex flex-col items-center justify-center gap-3 w-[100%] mb-10">
        <h1 className=" text-[2rem] pl-4 sticky top-16 w-full font-[Fago] text-left font-semibold bg-white text-black z-[2]">Knowledge Of The Day</h1>
        <Date date={date} setDate={setDate} />
        <GetRandomKnowledge data={data} setImageLoaded={setImageLoaded} imageLoaded={imageLoaded} download={download} setDownload={setDownload} />


      </div>
    </>

  )
}

export default KnowledgePage;