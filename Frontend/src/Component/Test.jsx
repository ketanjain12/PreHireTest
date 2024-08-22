import React, { useState, useEffect } from "react";
import { Data } from "../assets/Data";

const Test = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(Data[index]);
  const [lock, setLock] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const [sec, setSec] = useState(0); 
  const [min, setMin] = useState(0);  

  const labels = ["A", "B", "C", "D"]; 

  // Timer handling
  useEffect(() => {
    let timer;

   
    if (!result && min < 30) {
      
      timer = setInterval(() => {
        setSec((prevSec) => {
          if (prevSec === 59) {
            setMin((prevMin) => prevMin + 1);
            return 0;  
          }
          return prevSec + 1;
        });
      }, 1000);
    }

    // Auto-submit the test after 30 minutes
    if (min >= 30) {    
      setResult(true);   
      clearInterval(timer);
    }   

  return () => clearInterval(timer); 
  }, [sec, min, result]);


  const checkAnswer = (elem, option) => {         
    if (!lock) {
      setSelectedOption(option);  
      setLock(true);
      if (option === question.correctAnswer) { 
        setScore((prev) => prev + 1);
      }
    } else {
      elem.target.classList.add("Wrong");
      setLock(true);
    }
  };

  const moveNext = () => {
    if (lock) {
      if (index === Data.length - 1) {
        setResult(true);
        return;
      }

      setIndex(index + 1);
      setQuestion(Data[index + 1]);
      setLock(false);
    }
  };

  // logic for reset test

  const restTest = () => {
    setIndex(0);
    setQuestion(Data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  return (
    <>
      <div className="shadow-2xl file: bg-gradient-to-r from-indigo-300 via-blue-400 h-[100vh] relative">
        <div className="mx-auto absolute rounded-md bg-white top-[15%] w-[70%] h-[70%] m-auto flex flex-col gap-5 left-[20%]">
          <div className="flex items-center justify-between p-2">
            <h1 className="ml-16 text-xl font-bold mt-5"> 
              Digi-Prima Pre Hire Test
            </h1>
            <h4 className="font-bold text-xl">
              Timer: {min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}
            </h4>
          </div>
          <hr />

          {result ? (
            <>
              <h2 className="text-center capitalize text-xl font-bold mt-10">
                You scored {score} out of {Data.length}
              </h2>
              <button
                onClick={restTest}
                className="px-3 w-52 text-center ml-[420px] py-1 bg-blue-500 text-white rounded-md mt-3"
              >
                Reset
              </button>
              <p className="ml-10 capitalize mt-10 text-xl font-semibold text-blue-500">
                Thank you for participating in the Digi-Prima pre-hire test.
                Best wishes for your bright future...
              </p>
            </>
          ) : (
            <>
              <h2 className="ml-16 text-xl font-bold">
                {index + 1}. {question.question}
              </h2>
              <ul className="ml-16 py-2 text-xl">
                {question.options.map((option, i) => (
                  <li
                    onClick={(e) => checkAnswer(e, option)}
                    key={i}
                    className={`border-2 cursor-pointer   border-black rounded-md w-[70%] p-2 mb-2 ${
                      lock
                        ? option === question.correctAnswer
                          ? "bg-green-500"
                          : option === selectedOption
                          ? "bg-red-500"
                          : ""
                        : ""
                    }`}
                  >
                    {labels[i]}. {option}
                  </li>
                ))}
              </ul>
              <button
                onClick={moveNext}
                className=" rounded-lg hover:text-black hover:bg-blue-300 w-48 ml-80 bg-blue-600 text-white py-2 px-2 border-2 border-gray-500"
              >
                Next
              </button>
              <h3 className="text-center mr-56 font-semibold">
                {index + 1} of {Data.length}
              </h3>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Test;
