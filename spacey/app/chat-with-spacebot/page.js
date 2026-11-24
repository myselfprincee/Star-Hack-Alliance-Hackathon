"use client";

import { useState } from "react";
import Markdown from "react-markdown";

const SpaceBot = () => {
    const [response, setResponse] = useState([
        "Hello! I am SpaceBot. Ask me anything about space.",
    ]);
    const [question, setQuestion] = useState("");
    const [rows, setRows] = useState(1);
    const [isSending, setIsSending] = useState(false);

    const sendQuestion = async () => {
        const currentQuestion = question.trim();
        if (!currentQuestion || isSending) return;

        const messages = response.slice(1).map((content, index) => ({
            role: index % 2 === 0 ? "user" : "assistant",
            content,
        }));
        messages.push({ role: "user", content: `currentQuestion: ${currentQuestion} don't answer anything which is not related to space. it's a strict rule to follow.` });

        setResponse((previous) => [...previous, currentQuestion]);
        setQuestion("");
        setRows(1);
        setIsSending(true);

        try {
            const result = await fetch("/api/spacebot", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: messages.slice(-20) }),
            });
            const data = await result.json();

            if (!result.ok) {
                throw new Error(data.error || "SpaceBot could not answer right now.");
            }

            setResponse((previous) => [...previous, data.reply]);
        } catch (error) {
            console.error("SpaceBot request failed:", error);
            setResponse((previous) => [
                ...previous,
                error.message || "SpaceBot could not answer right now.",
            ]);
        } finally {
            setIsSending(false);
        }
    }

    const onQuestionHandler = (e) => {
        setQuestion(e.target.value);
        setRows(Math.min(6, Math.max(1, Math.ceil(e.target.value.length / 26))));
    }

    return (
        <>
            <div className="flex border-b text-black font-medium navbar items-center text-[20px] gap-3 mx-3 py-3"><svg className="-rotate-180 h-12 fill-transparent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="Right"><g fill="#000000" className="color000000 svgShape"><path d="M61.4 51.8L45.3 67.9c-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8l14.7-14.7-15.5-15.5c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0L61.4 49c.8.8.8 2 0 2.8zM88 50c0 21-17 38-38 38S12 71 12 50s17-38 38-38 38 17 38 38zm-4 0c0-18.8-15.2-34-34-34S16 31.2 16 50s15.2 34 34 34 34-15.2 34-34z" fill="#000000" className="color000000 svgShape"></path></g><g fill="#000000" className="color000000 svgShape"><path fill="#000000" d="M1084-1210V474H-700v-1684h1784m8-8H-708V482h1800v-1700z" className="color0000ff svgShape"></path></g></svg>SpaceBot</div>
            <div className="w-full space-y-5 py-10">
                <div className="flex flex-col justify-start items-left ml-4 mb-20 gap-3">
                    {response ?
                        response?.map((res, index) => (
                            <div key={index} className={`w-fit max-w-[95%] max-md:w-[90%] rounded-lg p-3 ${index % 2 === 0 ? 'bg-white text-black' : 'bg-black text-white'}`}>
                                <Markdown>{res}</Markdown>
                            </div>
                        ))
                        :
                        (
                            <div className="flex flex-col gap-2 animate-pulse">
                                <div className="h-5 w-full rounded-sm bg-gray-300"></div>
                                <div className="h-5 w-full rounded-sm bg-gray-300"></div>
                            </div>
                        )
                    }
                </div>
                <div className="w-[50%] absolute flex flex-wrap right-0 mr-40">
                    <div className="flex flex-wrap">{question}</div>
                </div>
            </div>

            <div className="fixed w-full bottom-0 py-3   ">
                <div className={`gap-3 navbar flex p-2 left-0 right-0 mx-auto justify-between bg-transparent w-[95%] py-2 px-2 items-end ${rows > 1 ? "rounded-md" : "rounded-full"}`}>
                    <textarea placeholder="Enter your question" rows={rows} cols={1} onChange={onQuestionHandler} type="text" className="transition-all placeholder:text-white bg-transparent text-white  w-full p-3 resize-none outline-white outline rounded-3xl items-center justify-end text-pretty" value={question} />
                    <button onClick={sendQuestion} disabled={isSending || !question.trim()} className="bg-red-600 px-6 py-3 rounded-full font-medium text-white disabled:cursor-not-allowed disabled:opacity-60">{isSending ? "Sending..." : "Send"}</button>
                </div>
            </div>
        </>
    )
}

export default SpaceBot