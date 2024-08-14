import React, { useState } from "react";
import onlineexmimg from "../assets/OnlineTestImage.svg";
import { Button, MenuItem, TextField } from "@mui/material";
import ErrorMessage from "./ErrorMessage";
import qimg from '../assets/testBackground.jpg'
//import { useNavigate } from "react-router-dom";

const TestInterface = ({ name, setName, fetchQuestions }) => {
  const [selectedRole, setSelectedRole] = useState("");
  //const [users, setUsers] = useState("");
  const [dificulty, setDificulty] = useState("");
  const [error, setError] = useState(false);

  // logic for routing on quiz pages
  //const Navigate = useNavigate();

  // Handler for select change
  const handleSelectChange = (event) => {
    setSelectedRole(event.target.value);
  };

  // Logic for submission
  const handleSubmit = () => {
    if (!selectedRole || !dificulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(selectedRole, dificulty);
      Navigate('/Quiz');
    }
  };

  return (
    <>
    <div 
    
    style={{
      backgroundImage: `url(${qimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',}} >
      <div 
       >
        <marquee className="text-5xl text-pink-500 text-center font-bold capitalize">
          Welcome to digiprima pre-hire test challange 
        </marquee>
      </div>

      <div className="flex items-center justify-around mt-20">
        <img
          className="h-[400px] w-[500px] mt-16 object-cover"
          src={onlineexmimg}
          alt=""
        />

        <div>

          <h1 className="text-center text-pink-500 font-bold underline underline-purple-400 text-4xl mb-10" >Test Setting</h1>
          {error && <ErrorMessage> please fill all the fields </ErrorMessage>} 
          <TextField
            onChange={(e) => setName(e.target.value)}
            label="Enter your name"
            variant="outlined"
            style={{ marginBottom: 30 }}
            value={name}
            className="flex flex-col p-5 w-[100%] justify-evenly"
          />

          <TextField
            onChange={handleSelectChange}  
            className="flex flex-col p-5 w-[100%] justify-evenly"
            select
            label="Select Test Type"
            variant="outlined"
            value={selectedRole}
            style={{ marginBottom: 30 }}
          >
            <MenuItem key={"Apptitude"} value={"Apptitude"}>
              Apptitude
            </MenuItem>
            <MenuItem key={"Coding"} value={"Coding"}>
              Coding
            </MenuItem>
          </TextField>

          <TextField
            onChange={(e) => setDificulty(e.target.value)}
            value={dificulty}
            className="flex flex-col p-5 w-[100%] justify-evenly"
            select
            label="Select-Difficulty"
            variant="outlined"
            style={{ marginBottom: 30,
              
             }}
          >
            <MenuItem key="Easy" value="Easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="Medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="Hard">
              Hard
            </MenuItem>
          </TextField>

          <Button className="flex flex-col p-5 bg-pink-500  w-[100%] justify-evenly" onClick={handleSubmit} variant="contained" color="primary"
          style={{ backgroundColor: '#ec4899', color: 'white', fontWeight: 'bold' }} size="large">
            Start the Test
          </Button>
        </div>
      </div>
      </div>
    </>
  );
};

export default TestInterface;
