import React, { useState } from "react";
import { Data } from "../assets/Data";
const Test = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(Data[index]);
  const [lock, setLock] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const checkAnswer = (elem, option) => {
    if (!lock) {
      setSelectedOption(option);
      setLock(true);
      setScore((prev) => prev + 1);
    } else {
      elem.target.classList.add("Wrong");
      setLock(true);
    }
  };

  const moveNext = () => {
    if (lock === true) {
      if (index === Data.length - 1) {
        setResult(true);
        return 0;
      }

      setIndex(index + 1);
      setQuestion(Data[index]);
      setLock(false);
      option.array.map((option) => {
        option.current.selectedOption.remove("wrong");
        option.current.selectedOption.remove("correct");
        return null;
      });
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r shadow-2xl  from-indigo-300 h-[100vh] realative via-blue-400">
        <div className="mx-auto absolute bg-white    top-[20%] w-[70%] h-[70%] m-auto flex flex-col gap-5 left-[20%]">
          <h1 className="ml-16 text-xl font-bold mt-5">
            Digi-Prima Pre Hire Test
          </h1>
          <hr />

          {result ? (
            <></>
          ) : (
            <>
              <h2 className="ml-16 text-xl font-bold ">
                {" "}
                {index + 1}.{question.question}
              </h2>

              <ul className="ml-16 py-2 text-xl">
                {question.options.map((option, i) => (
                  <li
                    onClick={(e) => checkAnswer(e, option)}
                    key={i}
                    className={`border-2 border-black rounded-md w-[70%] p-2 mb-2 ${
                      lock
                        ? option === question.correctAnswer
                          ? "bg-green-500"
                          : option === selectedOption
                          ? "bg-red-500"
                          : ""
                        : ""
                    }`}
                  >
                    {option}
                  </li>
                ))}
              </ul>

              <button
                onClick={moveNext}
                className=" w-48 ml-80 bg-blue-600 text-white py-2 px-2 border-2  border-gray-500"
              >
                Next
              </button>

              <h3 className="ml-16 font-semibold ">
                {index + 1} Of {Data.length}
              </h3>
            </>
          )}
              {result? <>
              
                <h2 className="text-center capitalize text-xl font-bold  mt-10" >you scored {score} out of {Data.length}</h2>
                <button className="px-3 w-52 text-center ml-[400px]  py-1 bg-blue-500 text-white rounded-md mt-3">Reset</button>
                <p className="ml-10 capitalize  mt-10 text-xl font-semibold text-blue-500 ">thankyou {name} for participating in digi-prima pre hire test . 
                 best wishes for your bright future...</p>
              </>  : <></>}
         
        </div>
      </div>
    </>
  );
};

export default Test;
