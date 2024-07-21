"use client"

import questions from './uniqueQuestions'
import { useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
// import { defaultInitState } from '../Store/Store';
import useStatesStore from "../Store/Store.js"
import Image from 'next/image';

// import {Leaderboard} from './page'

const SpaceQuiz = () => {

    // const store = useStore(useStatesStore, (state) => state)
    const [noOfQuestions, setNoOfQuestions] = useState(10);
    const [question, setQuestion] = useState([]);
    const [renderQuestion, setRenderQuestion] = useState(false);
    const [selectQuestion, setSelectQuestion] = useState(true);
    const [chosenAnswer, setChosenAnswer] = useState([]);
    const [color, setColor] = useState('bg-white');
    const [CheckedAnswer, setCheckedAnswer] = useState(false)
    const [resultPage, setResultPage] = useState(false);
    const [score, setScore] = useState(0);
    const [initialNum, setInitialNum] = useState(noOfQuestions)
    const router = useRouter();
    const { history, addToHistory } = useStatesStore()


    const handleChange = (event) => {
        setNoOfQuestions(event.target.value);
        setInitialNum(event.target.value);
    };

    console.log(selectQuestion)

    const Search = (e) => {
        e.preventDefault()
        location.reload()
    };

    const GoBackHandler = () => {
        setSelectQuestion(true)
        setResultPage(false)
        setRenderQuestion(false)
        setNoOfQuestions(10)
    }


    let totalq = noOfQuestions;
    console.log(initialNum)

    const handleRenderQuestion = () => {
        setChosenAnswer([])
        setCheckedAnswer(false)
        setColor('bg-white')
        if (noOfQuestions >= -1) {
            setResultPage(true)
            let randomIndex = Math.floor(Math.random() * questions.length);
            setQuestion(questions[randomIndex])
            if (noOfQuestions == -1) {
                return noOfQuestions;
            } else {
                setNoOfQuestions(noOfQuestions - 1);
            }
            setRenderQuestion(true);
            setSelectQuestion(false)
            console.log(noOfQuestions)
        }
    }

    const CheckAnswer = () => {
        setCheckedAnswer(true)
        console.log(chosenAnswer)
        console.log(chosenAnswer[0] === question.correctAnswer)
        if (chosenAnswer[0] === question.correctAnswer) {
            setScore((prev) => prev + 1);
            setColor('green');
        } else {
            console.log('wrong answer')
            console.log(color)
            setColor('red');
        }
    }

    const now = new Date();
    const currentTime = now.toLocaleTimeString();


    useEffect(() => {
        if (noOfQuestions === -1) {
            setRenderQuestion(false);
            setResultPage(true)
            addToHistory({
                score: `${score}/${initialNum}`,
                time: currentTime,
                date: now.toISOString().split('T')[0]
            })
        }
    }, [noOfQuestions])

    console.log(totalq)
    console.log(history)


    return (
        // <div className='text-white'>{num}</div>
        <div className='mt-20 text-white overflow-x-hidden'>
            
            {selectQuestion &&
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex gap-2 opacity-50 mb-5 w-[90%] left-0 right-0 mx-auto'><Link href={"/"}>Home </Link><p>{` > `}</p><Link href={"/space-quiz"}> Space Quiz</Link></div>
                    <h1 className='text-white text-[30px] text-center'>Up for a quiz ??</h1>
                    <p className='text-center my-5'>Select the no. of questions you wanna answer.</p>

                    <select className='text-white outline-none text-center w-min text-[3rem] bg-black' name="" id="" value={noOfQuestions} onChange={handleChange}>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                        <option value={25}>25</option>
                        <option value={30}>30</option>
                        <option value={40}>40</option>
                    </select>
                    <button className={`${renderQuestion && resultPage && "hidden"} bg-white text-black p-2 px-6 rounded-md mt-5`} onClick={handleRenderQuestion}>Start Quiz</button>

                    <div className='flex overflow-x-scroll gap-6 rounded-lg w-[90%] hide-scrollbar mb-10'>
                    <Image draggable={false} className='rounded-lg mt-10 select-none pointer-events-none' src='/images/space-exploration.gif' width={500} height={500} alt='quiz' />
                    <Image draggable={false}  className='rounded-lg mt-10 select-none pointer-events-none' src='/images/space-quiz-final.png' width={300} height={500} alt='quiz' />
                    <Image draggable={false}  className='rounded-lg mt-10 select-none pointer-events-none' src='/images/planet-quiz.gif' width={300} height={500} alt='quiz' />
                    <Image draggable={false} className='rounded-lg mt-10 select-none pointer-events-none w-[300px]' src='/images/hi_space.gif' width={700} height={500} alt='quiz' />
                    </div>
                </div>
            }
            {renderQuestion && <div className="scroll-container flex fixed top-[65px] bg-white text-black animate-unfade">
                <div className="scroll-text">
                    QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME! QUIZ TIME!
                </div>

            </div>}

            {renderQuestion &&
                <div className='text-white w-[90%] mt-7 left-0 right-0 mx-auto'>
                    <div className='text-[11px] flex justify-end items-center gap-2 text-end mb-6'>Remaining Questions =
                        <p className='bg-white text-black rounded-full w-min p-2 px-4 text-[14px]'>{noOfQuestions}</p></div>
                    <p className='text-[20px]'>{question.question}</p>
                    <ul className='flex flex-col gap-3 my-4'>
                        {question.options.map((option, index) => (
                            <li disabled={CheckedAnswer} onClick={() => {
                                setChosenAnswer([option, index])
                                console.log(chosenAnswer)
                            }} className={`${index === chosenAnswer[1] ? color : 'bg-white'} focus:border-2 border-pink transition-all  p-3 rounded-lg ${CheckedAnswer ? index !== chosenAnswer[1] && "opacity-50 pointer-events-none select-none" : "opacity-100"} text-left font-medium items-center justify-center text-black min-w-[80%]`} key={index}>
                                {option}</li>
                        ))}
                    </ul>
                    {/* <p>{question.correctAnswer}</p> */}
                    <p className='text-white my-4'>Chosen Answer = {chosenAnswer[0]}</p>

                    <div className='flex gap-3 justify-between'>
                        <button disabled={chosenAnswer.length == 0} onClick={CheckAnswer} className={`font-semibold text-black transition-all bg-white p-3 rounded-md ${CheckedAnswer && "select-none opacity-50 pointer-events-none"} opacity-100 ${chosenAnswer.length == 0 && "select-none opacity-50 pointer-events-none"}`}>Check Answer</button>
                        <button disabled={!CheckedAnswer} onClick={handleRenderQuestion} className={`font-semibold text-black transition-all bg-white p-3 rounded-md ${!CheckedAnswer && "select-none opacity-50 pointer-events-none"} opacity-100`}>{noOfQuestions === 0 ? "Finish Quiz" : "Next Question"}</button>
                    </div>
                </div>
            }

            {resultPage && !renderQuestion && <div>
                <div className={`scroll-container flex fixed top-[65px] ${score >= Math.round(initialNum / 2) ? "bg-green-400" : "bg-red-500"}  text-black animate-unfade`}>
                    <div className="scroll-text">
                        QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER!
                    </div>
                </div>
                <div className='flex flex-col w-[80%] justify-center items-center left-0 right-0 mx-auto mt-10 mb-10'>
                    <h1 className='text-[40px] font-semibold uppercase'>Quiz Over</h1>
                    <p className='mt-6'>YOU GOT</p>
                    <h3 className='text-[3rem]'>{score} / {initialNum}</h3>
                    <div className='flex w-full text-center justify-evenly mt-5'>
                        <div>
                            <h4>CORRECT</h4>
                            <p className='text-[2rem]'>{score}</p>
                        </div>
                        <div>
                            <h4>WRONG</h4>
                            <p className='text-[2rem]'>{initialNum - score}</p>
                        </div>
                    </div>
                    <div className='my-4'>
                        {score >= 7 ?
                            <p>you played awesome man keep the g stuff up.</p> :
                            <div className=''>
                                Hey! You scored low. but I believe in you.{" "}
                                <Link className='text-blue-400 underline underline-offset-1' href={"/random-knowledge"}>Click here</Link>
                                {" "}to practice the questions which get asked in the space quizzes.
                            </div>
                        }
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='flex w-full justify-between my-4 items-end'>
                            <button className='bg-white mr-3 w-full text-black p-3 rounded-lg font-semibold' onClick={() => {
                                setNoOfQuestions(initialNum)
                                setRenderQuestion(true)
                                setScore(0)
                            }}>Restart Quiz</button>
                            <button className='bg-white ml-3 w-full text-black p-3 rounded-lg font-semibold'>Leaderboard</button>
                            <Leaderboard history={history} />
                        </div>
                        <button onClick={GoBackHandler} className='bg-white text-black p-3 rounded-lg font-semibold'>Go back to Quiz Home</button>
                    </div>

                </div>
                <div className={`scroll-container fixed bottom-0 flex ${score >= Math.round(initialNum / 2) ? "bg-green-400" : "bg-red-500"} text-black animate-unfade`}>
                    <div className="scroll-text">
                        QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER! QUIZ OVER!
                    </div>
                </div>
            </div>}
        </div>

    )
}


export const Leaderboard = ({ history }) => {
    console.log(history)
    return (
        <div>

            <div>
                {history.map((single, index) => {
                    <>
                        <p>On {single.date}, at {single.time}</p>
                        <p>{single.score}</p>
                    </>
                })}
            </div>
        </div>
    )
};

export default SpaceQuiz;