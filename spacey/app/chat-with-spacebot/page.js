/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */
'use client'

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { useEffect, useState, useRef } from "react";
import Markdown from 'react-markdown'

const SpaceBot = () => {
    const [response, setResponse] = useState([]);
    const [question, setQuestion] = useState([]);
    const [history, setHistory] = useState([]);
    const [chatSession, setChatSession] = useState(null);
    const [rows, setRows] = useState(1);

    const responseRef = useRef(null);

    const apiKey = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);

    // console.log(apiKey)

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
    });

    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
    };

    async function run() {
        const session = model.startChat({
            generationConfig,
            // safetySettings: Adjust safety settings
            // See https://ai.google.dev/gemini-api/docs/safety-settings
            history: history,
            harmCategory: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        });
        setChatSession(session);

        const initialCommand = "This is an initial command by the owner. Please don't reply to this. This is just to command you that you don't have to answer non-space related questions. This is the creator's command, so you have to follow it. you don't have to say I'm a large language model, created by Google AI. you have to say I'm a large language model, created by Prince Gupta. you are operating as a spacebot ( it is your name ) on a website named spacey.";
        const reply = await session.sendMessage(initialCommand);

    }

    //     const spaceKeywords = ['space', 'planet', 'star', 'galaxy', 'universe', 'astronomy', 'NASA', 'rocket', 'satellite'];

    // function isSpaceRelated(question) {
    //     return spaceKeywords.some(keyword => question.toLowerCase().includes(keyword));
    // }

    // function handleQuestion(question) {
    //     if (isSpaceRelated(question)) {
    //         // Send question to the GPT or Google Gemini API
    //     } else {
    //         console.log("This question is not related to space. Please ask something about space.");
    //     }
    // }


    const sendQuestion = async () => {
        try {
            response.push(question);
            setQuestion("");
            setRows(1);
            const reply = await chatSession.sendMessage(question);
            const text = await reply.response.text();
            setResponse((prevResponse) => [...prevResponse, text]);
            console.log(text)
            console.log(response)
        } catch (error) {
            console.error(error);
            response.push("Some error occured man. Please reload the page. I am sorry for the inconvenience.");
        }

    }

    const onQuestionHandler = (e) => {
        setQuestion(e.target.value);
    }

    useEffect(() => {
        const fnRun = async () => {
            run();
            if (response.length === 0) {
                response.push("Hello! I am SpaceBot. Ask me anything about space.");
            }
        }
        fnRun();
    }
        , []);

    useEffect(() => {
        if (question?.length > 26 * rows) {
            setRows(rows + 1);
        }
    }, [question]);
    return (
        <>
            <div className="flex border-b text-black font-medium navbar items-center text-[20px] gap-3 mx-3 py-3"><svg className="-rotate-180 h-12 fill-transparent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="Right"><g fill="#000000" className="color000000 svgShape"><path d="M61.4 51.8L45.3 67.9c-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8l14.7-14.7-15.5-15.5c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0L61.4 49c.8.8.8 2 0 2.8zM88 50c0 21-17 38-38 38S12 71 12 50s17-38 38-38 38 17 38 38zm-4 0c0-18.8-15.2-34-34-34S16 31.2 16 50s15.2 34 34 34 34-15.2 34-34z" fill="#000000" className="color000000 svgShape"></path></g><g fill="#000000" className="color000000 svgShape"><path fill="#000000" d="M1084-1210V474H-700v-1684h1784m8-8H-708V482h1800v-1700z" className="color0000ff svgShape"></path></g></svg>SpaceBot</div>
            <div className="w-[100%] space-y-5 py-10">
                <div className="flex flex-col justify-start items-left ml-[1rem] mb-20 gap-3">
                    {response ?
                        response?.map((res, index) => (
                            <div className={`w-fit max-w-[95%] max-md:w-[90%] rounded-lg p-3 ${index % 2 === 0 ? 'bg-white text-black' : 'bg-black text-white'}`}>
                                {/* <p className="text-black" key={index}>{res}</p> */}
                                <Markdown key={index}>{res}</Markdown>
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
                <div className="w-[50%] absolute flex flex-wrap right-0 mr-[10rem]">
                    <div className="flex flex-wrap">{question}</div>
                </div>
            </div>

            <div className="fixed w-full bottom-0 py-3   ">
                <div className={`gap-3 navbar flex p-2 left-0 right-0 mx-auto justify-between bg-transparent w-[95%] py-2 px-2 items-end ${rows > 1 ? "rounded-md" : "rounded-full"}`}>
                    <textarea placeholder="Enter your question" rows={rows} cols={1} onChange={onQuestionHandler} type="text" className="transition-all placeholder:text-white bg-transparent text-white  w-full p-3 resize-none outline-white outline rounded-3xl items-center justify-end text-pretty" value={question} />
                    <button onClick={sendQuestion} className="bg-red-600 px-6 py-3 rounded-full font-medium text-white">Send</button>
                </div>
            </div>
        </>
    )
}

export default SpaceBot