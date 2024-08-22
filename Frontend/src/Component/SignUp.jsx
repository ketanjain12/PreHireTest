import React, { useState } from 'react'
import { Link, useNavigate,  } from 'react-router-dom'

const SignUp = () => {

const [email , setEmail] = useState("")
const [password,setPassword] = useState("")
const [confirmpassword , setConfirmPassword] = useState("")

const Navigate = useNavigate();

const handleSignup = async (event)=>{
   event.preventDefault();
  console.log(email , password , confirmpassword)    

try{

  const result = await fetch('http://localhost:3002/api/v1/signup',{
    method: 'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify({email,password}),

  });

  const resultData = await result.json();

  if(result.ok){

   Navigate('/login');

  }

  else{

    console.error(resultData.msg || 'Signup failed');

  }



}catch(error){


}



} 

return (
    <>
    <div className='flex items-center  justify-center mt-10 py-1 '>
    <Link to='/login' className=' border-gray-400 rounded-lg text-black bg-white py-2 px-7 hover:bg-gradient-to-r from-indigo-500 via-purple-500 hover:text-white to-pink-500' >login</Link>
    <button className=' hover:bg-gradient-to-r from-indigo-500 via-purple-500 hover:text-white to-pink-500  border-gray-400 rounded-lg text-black bg-white py-2 px-6'>signup</button>
   </div>
<div className='w-[50%] mt-10 mx-auto rounded-lg bg-gray-300 box-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1) shadow-lg' >
<h1 className='text-3xl font-bold text-gray-700 text-center' >SignUp</h1>

<form onSubmit={handleSignup}
className='flex flex-col justify-center items-center m-1 p-1 mt-10'>

<input onChange={(e)=> setEmail(e.target.value) }  className='border border-gray-300 w-[50%] rounded-xl  px-3 py-3 '
type='email'
placeholder='Email'
id='email'
value={email}        
/>
<br/>
        
<input onChange={(e)=> setPassword(e.target.value)} className='border border-gray-300 w-[50%] rounded-xl  px-3 py-3 '
        
          type='password'
          placeholder='password'
          id='password'
          value={password}
          
/>

<br />
       
<input onChange={(e)=> setConfirmPassword(e.target.value)} className='border border-gray-300 w-[50%] rounded-xl  px-3 py-3 '
          type='password'
          placeholder='confirm Password'
          id='confirm Password'
          value={confirmpassword}
          
/>
<br />
       
        
<button
className='bg-purple-950 text-slate-50  hover:text-yellow-400 py-1 px-2 rounded-md mt-5  w-[50%]'
type='submit'
>
SignUp
</button>
</form>
</div> 
</>

  )
}

export default SignUp
