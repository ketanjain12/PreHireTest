// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     try {
//       const result = await fetch('http://localhost:3002/api/v1/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const resultData = await result.json();

//       if (result.ok) {
//         console.log('Login successful');
//         navigate('/TestInterface'); // Navigate to the correct route after login
//       } else {
//         console.error('Login failed:', resultData.msg);
//       }
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   };

//   return (
//     <>
//       <div className='flex items-center justify-center mt-10  py-1'>
//         <Link
//           className="border-gray-400 rounded-lg text-black bg-white py-2 px-7 hover:bg-gradient-to-r from-indigo-500 via-purple-500 hover:text-white to-pink-500"
//           to="/login" 
//         >
//           Login 
//         </Link>

//         <Link
//           className='hover:bg-gradient-to-r from-indigo-500 via-purple-500 hover:text-white to-pink-500 border-gray-400 rounded-lg text-black bg-white py-2 px-6'
//           to='/signUp'
//         >
//           Signup
//         </Link>
//       </div>

//       <div className='w-[50%] mx-auto rounded-lg bg-gray-300 box-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1) mb-20 shadow-lg'>
//         <h1 className='text-3xl mt-7 font-bold text-gray-700 text-center'>Login</h1>
//         <form className='flex flex-col justify-center items-center m-1 p-1 mt-10' onSubmit={handleLogin}>
//           <br />
//           <input
//             className='border border-gray-300 w-[50%] rounded-xl  px-3 py-3'
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}  
//             type='email'
//             placeholder='Email'
//             id='Email'
//           />
//           <br />
//           <input
//             className='border border-gray-300 w-[50%] rounded-xl  px-3 py-3'
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             type='password'
//             placeholder='Password'
//             id='Password'
//           />
//           <br />
//           <button
//             className='bg-purple-950 w-[50%] text-slate-50 py-1 px-2 rounded-md '
//             type='submit'
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login;
import React, { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setMessage('Please fill in both email and password.');
            return;
        }

        try {
            const response = await fetch('http://your-api-url/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Login successful');
                // You can save the token and redirect the user here
                console.log('User data:', data.data);
                console.log('Token:', data.token);
                // Save the token in localStorage or in your app state
                localStorage.setItem('token', data.token);
                // Redirect or update UI accordingly
            } else {
                setMessage(data.msg || 'Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default LoginForm;
