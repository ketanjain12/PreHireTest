import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const Questions = ({
  cureQues,
  setCureQues,
  score,
  questions = [],  //Ensure questions is an array by default 
  correct,
  options,
  setScore,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);  

  // Check if questions are available and current question is valid
  //   if (!questions.length || !questions[cureQues]) {
  //     return (
  //       <div className="text-center text-red-500">
  //         <p>No questions available or invalid question index.</p>
  //       </div>
  //  );
  // }

  const handleSelect = (i)=>{
    
    if(selected===i && selected===correct){
        return "select";
    }

    else if(selected===i && selected !== correct){
        return "wrong";
    }

    else if (i === correct){
     
        return "select";

    }

  };


  console.log("questions:", questions);
console.log("cureQues:", cureQues);
console.log("current question:", questions[cureQues]);
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-black">
          Questions {cureQues + 1}
        </h1>
        <div>
          <h2 className="text-xl font-semibold text-bold">
            {questions[cureQues].question}
          </h2>

          <div>{error && <ErrorMessage>{error}</ErrorMessage>}
          
          {

       options &&
        options.map((i )=>(
     
        <button className={`singleOption ${selected && handleSelect(i)} `} 
        key={i} 
        disabled={selected }
        onClick={()=>{
          
           

        }} > {i}</button>

        ))
 }
          
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
