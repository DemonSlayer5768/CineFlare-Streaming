import React from "react";
import "../styles/register.css";

const Register = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Register;
