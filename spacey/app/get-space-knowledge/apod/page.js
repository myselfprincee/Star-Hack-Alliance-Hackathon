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
  

  const fixDate = date.split('-');
  const finalDate = `${parseInt(fixDate[0]) - 2000}${fixDate[1]}${fixDate[2]}`;


  console.log(imageLoaded);

  useEffect(() => {
    setInterval(() => {
      setDownload("Download Now");
  }, 5000);
    const fetchData = async () => {
      const response = await fetch(`https://science.nasa.gov/wp-json/wp/v2/apod-basic?api_key=${process.env.NASA_API_KEY}&date_from=${finalDate}&date_to=${finalDate}`, { next: { revalidate: 3600 } });
      setData(await response.json());
      // console.log(response.json);
      return data;
    }
    fetchData();
  }, [date]);

  return (
    <>
      <div className="mt-20 flex flex-col items-center justify-center gap-3 w-full mb-10">
        <h1 className=" text-[2rem] pl-4 sticky top-16 w-full font-[Fago] text-left font-semibold bg-white text-black z-2">Knowledge Of The Day</h1>
        <Date date={date} setDate={setDate} />
        <GetRandomKnowledge data={data[0]} setImageLoaded={setImageLoaded} imageLoaded={imageLoaded} download={download} setDownload={setDownload} />


      </div>
    </>

  )
}

export default KnowledgePage;