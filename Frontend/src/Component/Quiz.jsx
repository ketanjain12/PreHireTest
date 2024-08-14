import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Questions from "./Questions";

const Quiz = ({ name, score, setScore, questions, setQuestions }) => {
  const [options, setOptions] = useState([]);
  const [cureQues, setCureQues] = useState(0);

  useEffect(() => {
    console.log(questions);

    if (questions && questions[cureQues]) {
      const currentQuestion = questions[cureQues];
      setOptions(
        handleShuffle([
          currentQuestion.correct_answer,
          ...currentQuestion.incorrect_answers, // Corrected property name
        ])
      );
    }
  }, [questions, cureQues]);

  // Function for shuffling options
  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <>
      <div className="text-center">

{/* Name section */}
        <div className="text-center text-2xl text-red-900 " > 

          <h1 className="capitalize mt-20" >{`welcome ,${name} Best Wishes`}</h1>

        </div>

{/* score section */}

        <div>
    
    {/* <span>{questions[cureQues].difficulty}</span> */}
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
            <h2>Question{cureQues + 1}</h2>
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
      </div>
    </>
  );
};

export default Quiz;
