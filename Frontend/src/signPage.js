import React, { useState } from 'react';

const signPage = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleSignupClick = () => {
    setIsSignup(true);
  };

  const handleLoginClick = () => {
    setIsSignup(false);
  };

  return (
    <div className="container">
      <div className="title-text">
        <div
          className="login"
          style={{ marginLeft: isSignup ? '-50%' : '0%' }}
        >
          Login
        </div>
        <div
          className="signup"
          style={{ marginLeft: isSignup ? '0%' : '50%' }}
        >
          Signup
        </div>
      </div>
      <div className="form-container">
        <form className={`form ${isSignup ? 'signup' : 'login'}`}>
          {isSignup ? (
            <div>
              {/* Signup Form */}
              <h2>Signup Form</h2>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
          ) : (
            <div>
              {/* Login Form */}
              <h2>Login Form</h2>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
          )}
        </form>
      </div>
      <div className="toggle-buttons">
        <label
          className="login"
          onClick={handleLoginClick}
          style={{ cursor: 'pointer' }}
        >
          Login
        </label>
        <label
          className="signup"
          onClick={handleSignupClick}
          style={{ cursor: 'pointer' }}
        >
          Signup
        </label>
      </div>
      <div className="signup-link">
        <a href="#" onClick={(e) => {
          e.preventDefault();
          handleSignupClick();
        }}>
          Go to Signup
        </a>
      </div>
    </div>
  );
};

export default signPage;
