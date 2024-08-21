import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Home from "./Component/Home";
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";
import TestInterFace from "./Component/TestInterFace";
import Quiz from "./Component/Quiz"
import axios from "axios";
import CreateTest from "./Component/CreateTest";
import Test from "./Component/Test";

const App = () => {

const [name , setName] = useState("");
const [questions, setQuestions] = useState([]);
const [score , setScore] = useState(0);

const fetchQuestions = async(selectedRole = "", dificulty = "")=>{

try{
const res = await axios.get('http://localhost:3002/api/v1/createtests') 
const data = res.data 
console.log(data)
setQuestions(data.results)

}catch(error){
  console.log("error in fetching data" , error.message)
}
 
      
   }

  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
           <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signUp" element={<SignUp/>} /> 
          <Route  path="/Quiz"
          name={name}
          setName={setName}
          score={score}
          setScore={setScore}
          questions={questions}
          element={<Quiz name={name} setName={setName} score={score} setScore={setScore} questions={questions} setQuestions={setQuestions} />} ></Route>
          <Route path="/TestInterface" element={<TestInterFace name={name}
                setName={setName}
                fetchQuestions={fetchQuestions} ></TestInterFace> 
       } ></Route>
       <Route path="/test" element={<Test></Test>} ></Route>

        </Routes>
      </BrowserRouter>  

 
        
    </>
  );
};

export default App;
