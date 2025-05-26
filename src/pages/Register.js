import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

function Register() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h2>Create Account</h2>
            <p>Join our platform today</p>
          </div>
          
          <form className="auth-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Enter your full name" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Choose a strong password" 
                required 
              />
            </div>
            
            <button type="submit" className="btn btn-primary auth-button">
              Create Account
            </button>
          </form>
          
          <div className="auth-footer">
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register; 