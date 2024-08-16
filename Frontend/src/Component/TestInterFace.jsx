// import React, { useState } from "react";
// import onlineexmimg from "../assets/OnlineTestImage.svg";
// import { Button, MenuItem, TextField } from "@mui/material";
// import ErrorMessage from "./ErrorMessage";
// import qimg from '../assets/testBackground.jpg'
// //import { useNavigate } from "react-router-dom";

// const TestInterface = ({ name, setName, fetchQuestions }) => {
//   const [selectedRole, setSelectedRole] = useState("");
//   //const [users, setUsers] = useState("");
//   const [dificulty, setDificulty] = useState("");
//   const [error, setError] = useState(false);

//   // logic for routing on quiz pages
//   //const Navigate = useNavigate();

//   // Handler for select change
//   const handleSelectChange = (event) => {
//     setSelectedRole(event.target.value);
//   };

//   // Logic for submission
//   const handleSubmit = () => {
//     if (!selectedRole || !dificulty || !name) {
//       setError(true);
//       return;
//     } else {
//       setError(false);
//       fetchQuestions(selectedRole, dificulty);
//       Navigate('/Quiz');
//     }
//   };

//   return (
//     <>
//     <div 
    
//     style={{
//       backgroundImage: `url(${qimg})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//       minHeight: '100vh',}} >
//       <div 
//        >
//         <h1 className="text-5xl text-black text-center font-bold capitalize">
//           Welcome to digiprima pre-hire test challange 
//         </h1>
//       </div>

//       <div className="flex items-center justify-around mt-20">
//         <img
//           className="h-[400px] w-[500px] mt-16 object-cover"
//           src={onlineexmimg}
//           alt=""
//         />

//         <div>

//           <h1 className="text-center text-black font-bold underline underline-purple-400 text-4xl mb-10" >Test Setting</h1>
//           {error && <ErrorMessage> please fill all the fields </ErrorMessage>} 
//           <TextField
//             onChange={(e) => setName(e.target.value)}
//             label="Enter your name"
//             variant="outlined"
//             style={{ marginBottom: 30 }}
//             value={name}
//             className="flex flex-col p-5 w-[100%] justify-evenly"
//           />

//           <TextField    
//             onChange={handleSelectChange}  
//             className="flex flex-col p-5 w-[100%] justify-evenly"
//             select
//             label="Select Test Type"
//             variant="outlined"
//             value={selectedRole}
//             style={{ marginBottom: 30 }}
//           >
//             <MenuItem key={"Aptitude"} value={"Aptitude"}>
//               Aptitude
//             </MenuItem>
//             <MenuItem key={"Coding"} value={"Coding"}>
//               Coding
//             </MenuItem>
//           </TextField>

//           <TextField
//             onChange={(e) => setDificulty(e.target.value)}
//             value={dificulty}
//             className="flex flex-col p-5 w-[100%] justify-evenly"
//             select
//             label="Select-Difficulty"
//             variant="outlined"
//             style={{ marginBottom: 30,
              
//              }}
//           >
//             <MenuItem key="Easy" value="Easy">
//               Easy
//             </MenuItem>
//             <MenuItem key="Medium" value="Medium">
//               Medium
//             </MenuItem>
//             <MenuItem key="Hard" value="Hard">
//               Hard
//             </MenuItem>
//           </TextField>

//           <Button className="flex flex-col p-5  w-[100%] justify-evenly" onClick={handleSubmit} variant="contained" color="primary"
//           style={{  color: 'white', fontWeight: 'bold' }} size="large">
//             Start the Test
//           </Button>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default TestInterface;
import React, { useState } from 'react';

const TestInterFace = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [testIds, setTestIds] = useState([""]);

  const handleAddTestId = () => {
    setTestIds([...testIds, ""]);
  };

  const handleTestIdChange = (index, value) => {
    const updatedTestIds = [...testIds];
    updatedTestIds[index] = value;
    setTestIds(updatedTestIds);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      name,
      email,
      testIds,
    };

    try {
      const response = await fetch('http://localhost:3002/api/v1/registerCandidate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Candidate registered successfully!');
      } else {
        alert(result.msg || 'Failed to register candidate');
      }
    } catch (error) {
      console.error('Error registering candidate:', error);
      alert('An error occurred while registering the candidate');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Register Candidate</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block text-lg font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter Candidate Name"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter Candidate Email"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">Test IDs</label>
          {testIds.map((testId, index) => (
            <input
              key={index}
              type="text"
              value={testId}
              onChange={(e) => handleTestIdChange(index, e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder={`Test ID ${index + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleAddTestId}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Add Another Test ID
        </button>

        <button
          type="submit"
          className="mt-6 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
        >
          Register Candidate
        </button>
      </form>
    </div>
  );
};

export default TestInterFace;
