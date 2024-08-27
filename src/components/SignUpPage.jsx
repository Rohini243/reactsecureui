import React from 'react';
import './SignUpPage.css'; // Ensure you have this CSS file for styling

const SignUpPage = () => {
  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <p>Already a member? <a href="/login">Log In</a></p>
      <form>
        <div className="input-group">
          <label>Email</label>
          <input type="email" required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" required />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
