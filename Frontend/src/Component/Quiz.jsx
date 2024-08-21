import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Questions from "./Questions";

const Quiz = ({ name, score, setScore, questions, setQuestions }) => {
const [options, setOptions] = useState([]);
const [cureQues, setCureQues] = useState(0);

  // useEffect(() => {
  // console.log(questions);

  // if (questions && questions[cureQues]) {
  // const currentQuestion = questions[cureQues];
  // setOptions(
  //  handleShuffle([
  //  currentQuestion.correct_answer,
  //         ...currentQuestion.incorrect_answers, //correction
  //       ])
  //     );
  //   }
  // }, [questions, cureQues]);

  // Function for shuffling options
  // const handleShuffle = (options) => {
  //   return options.sort(() => Math.random() - 0.5);
  // };

  return (
    <>
      <div className=" flex justify-around items-center mt-5  text-red-900">   
        <h3 className='font-semibold text-2xl text-gray-600 '>{new Date().toUTCString().slice(0,16)}</h3>
        <h1 className="capitalize text-3xl  my-4 ">{`welcome ,${name} Best Wishes`}</h1>
        <p className=" text-2xl text-gray-600" >Time limit:30</p>
      </div>
      
      {/* 
        <div>
    <span>score:{score}</span>
        </div>
        <Questions 
        cureQues={cureQues}
        setCureQues={setCureQues}
        score={score}
        questions={questions}
        correct={questions[cureQues]?.correct_answer}
        options={options}
        setScore={setScore}
        setQuestions={setQuestions}
        ></Questions>

        {questions.length > 0 ? (
          <div>
            {/* Render your questions here */}
      {/* <h2>Question{cureQues + 1}</h2>
            {options.map((option, index) => (
              <p key={index}>{option}</p>
            ))}
          </div>
        ) : (
          <CircularProgress 
          style={{margin:100,
                 color:"inherit",
                 
                
          }}
          />
        )}
      </div> */}{" "}
      <div className="bg-white h-[90vh] ">
      <div className="border mt-10 border-gray-500 w-[80%] mx-auto">
        <h1 className="text-xl  ml-28 text-black font-bold w-[70%] "> Question 1 : 500 was invested at  per anum simple intrest  and a certain sum of money invested at 10% per annum simple interest.
           If the sum of the interest on both the sum after 4 years is 480, the latter sum of money is ?</h1></div>
      <ul className="ml-60  text-center gap-5 mt-10 flex flex-col justify-around text-xl font-semibold">
        <li className="border hover:bg-slate-700 hover:text-white bg-gray-100 border-gray-500 px-1 py-2  rounded-xl w-[50%]">450</li>
        <li className="border hover:bg-slate-700 hover:text-white bg-gray-100 border-gray-500 px-1 py-2  rounded-xl w-[50%]">600</li>
        <li className="border hover:bg-slate-700 hover:text-white bg-gray-100 border-gray-500 px-1 py-2  rounded-xl w-[50%]">300</li>
        <li className="border hover:bg-slate-700 hover:text-white bg-gray-100 border-gray-500 px-1 py-2  rounded-xl w-[50%]">350</li>
      </ul>

      <div className="mt-20 flex  items-center justify-between m-5 " >
        
        <button className="bg-red-900 text-white px-4 rounded-md py-1" >Previous</button>
        <button className="bg-red-900 text-white px-6 rounded-md py-1">Next</button>
      </div>
      </div>
    </>
  );
};

export default Quiz;
