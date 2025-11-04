import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="brand">
          <span>Serenity</span> Suites
        </h1>
        <h2>{isLogin ? "Welcome Back" : "Create Your Account"}</h2>
        <p className="subtitle">
          {isLogin
            ? "Log in to continue your journey."
            : "Join us and discover true luxury."}
        </p>

        <form>
          {!isLogin && (
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>
          )}

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder={isLogin ? "Enter your password" : "Minimum 6 characters"}
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Re-enter your password"
              />
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? "Log In" : "Create Account"}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <span onClick={toggleForm}>
            {isLogin ? "Sign Up" : "Log In"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Form;
