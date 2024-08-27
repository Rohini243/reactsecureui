import React from 'react';
import './LoginPage.css'; // Ensure you have this CSS file for styling

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <div className="input-group">
          <label>Username</label>
          <input type="text" required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" required />
        </div>
        <div className="forgot-password">
          <a href="/forgot-password">Forget Password?</a>
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="signup-redirect">
        Not a Member? <a href="/signin-signup">Signup</a>
      </p>
    </div>
  );
};

export default LoginPage;
