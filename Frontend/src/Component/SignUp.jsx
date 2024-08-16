import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState(""); // Assuming role is part of the signup form
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    // Optional: Check if password and confirm password match
    // if (password !== confirmPassword) {
    //   alert("Passwords do not match");
    //   return;
    // }

    try {
      // Sending a POST request to the signup endpoint
      const response = await fetch('http://localhost:3002/api/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, role }),
      });

      const resultData = await response.json();

      if (response.ok) {
        // Signup successful
        alert("Signup successful");
        navigate('/login'); // Redirect to login page after successful signup
      } else {
        // Handle errors (e.g., user already exists)
        alert(resultData.msg || "Signup failed");
      }

    } catch (error) {
      console.error("Signup Error:", error);
      alert("An error occurred during signup");
    }
  };

  return (
    <>
      <div className='flex items-center justify-center mt-10 py-1 '>
        <Link to='/login' className='border-gray-400 rounded-lg text-black bg-white py-2 px-7 hover:bg-gradient-to-r from-indigo-500 via-purple-500 hover:text-white to-pink-500'>login</Link>
        <button className='hover:bg-gradient-to-r from-indigo-500 via-purple-500 hover:text-white to-pink-500 border-gray-400 rounded-lg text-black bg-white py-2 px-6'>signup</button>
      </div>
      <div className='w-[50%] mt-10 mx-auto rounded-lg bg-gray-300 shadow-lg'>
        <h1 className='text-3xl font-bold text-gray-700 text-center'>SignUp</h1>

        <form onSubmit={handleSignup} className='flex flex-col justify-center items-center m-1 p-1 mt-10'>

          <input onChange={(e) => setName(e.target.value)} className='border border-gray-300 w-[50%] rounded-xl  px-3 py-3' type='text' placeholder='Name' id='name' value={name} />
          <br />

          <input onChange={(e) => setEmail(e.target.value)} className='border border-gray-300 w-[50%] rounded-xl  px-3 py-3' type='email' placeholder='Email' id='email' value={email} />
          <br />

          <input onChange={(e) => setPassword(e.target.value)} className='border border-gray-300 w-[50%] rounded-xl  px-3 py-3' type='password' placeholder='Password' id='password' value={password} />
          <br />

          {/* <input onChange={(e) => setConfirmPassword(e.target.value)} className='border border-gray-300 w-[50%] rounded-xl capitalize px-3 py-3' type='password' placeholder='Confirm Password' id='confirmPassword' value={confirmPassword} />
          <br /> */}

          <input onChange={(e) => setRole(e.target.value)} className='border border-gray-300 w-[50%] rounded-xl  px-3 py-3' type='text' placeholder='Role' id='role' value={role} />
          <br />

          <button className='bg-purple-950 w-[50%] text-slate-50 py-1 px-2 rounded-md mt-5' type='submit'>SignUp</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
