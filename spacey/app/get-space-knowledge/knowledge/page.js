"use client";

import data from "./data.js";
import Markdown from "react-markdown";
import gfm from "remark-gfm";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import useStatesStore from "../../Store/Store";

const Knowledge = () => {
  const [RandomData, setRandomData] = useState([]);
  const [refreshTime, setRefreshTime] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [scrollRequest, setScrollRequest] = useState(0);
  const headingRef = useRef(null);
  const { numArr, setNumArr, clearNumArr } = useStatesStore();

  const showData = () => {
    const number = Math.floor(Math.random() * data.length);

    if (numArr.length >= data.length) {
      console.log("All data has been shown. Resetting.");
      setShowNotification(true);
      clearNumArr();
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      setScrollRequest((request) => request + 1);
      return;
    }

    if (numArr.includes(number)) {
      showData();
      return;
    }
    setNumArr(number);
    console.log(numArr);
    setRandomData(data[number]);

    setRefreshTime(true);
    setScrollRequest((request) => request + 1);

    setTimeout(() => {
      setRefreshTime(false);
    }, 3000);
  };
  useEffect(() => {
    showData();
  }, []);

  useEffect(() => {
    if (scrollRequest === 0) return;

    const frame = window.requestAnimationFrame(() => {
      headingRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [scrollRequest]);

  return (
    <div className="w-[90%] left-0 right-0 mx-auto mt-20">
      {showNotification && (
        <div className="text-black -translate-y-20 fixed bottom-0 z-50 bg-white p-3 outline outline-black w-[90%] rounded-lg">
          All the data has been shown. Click the button again to repeat the
          shown data.
        </div>
      )}
      <div className="flex gap-2 text-white flex-wrap opacity-50 mb-5 left-0 right-0 mx-auto">
        <Link href={"/"}>Home </Link>
        <p>{` > `}</p>
        <Link href={"/get-space-knowledge"}> Get Space Knowledge</Link>
        <p>{`>`}</p>
        <Link href={"/get-space-knowledge/knowledge"}>Knowledge</Link>
      </div>
      <div className="text-white mb-28">
        <h2 ref={headingRef} className="scroll-mt-20 text-white text-3xl font-semibold">
          {RandomData.question}
        </h2>
        <div className="prose prose-strong:text-white prose-invert my-6 w-full max-w-none wrap-break-word prose-img:w-full prose-img:max-h-112 prose-img:rounded-lg prose-img:object-contain prose-a:text-sky-300">
          <Markdown remarkPlugins={[gfm]}>{RandomData.answer}</Markdown>
        </div>
        <p className="italic text-[10px] opacity-50">
          Source : {RandomData.source}
        </p>
      </div>

      <div className="w-full fixed bottom-0 bg-black py-4">
        <button
          onClick={showData}
          className="knowledge-refresh-button bg-white p-2 w-[90%] disabled:bg-gray-400 transition-colors duration-200"
          disabled={refreshTime}
          aria-busy={refreshTime}
        >
          {refreshTime
            ? "Finding something new..."
            : showNotification
            ? "Revise what you learnt"
            : `Refresh to learn something new`}
        </button>
      </div>
    </div>
  );
};

export default Knowledge;
