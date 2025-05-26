import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h2>Welcome Back</h2>
            <p>Sign in to your account</p>
          </div>
          
          <form className="auth-form">
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
                placeholder="Enter your password" 
                required 
              />
              <div className="forgot-password">
                <Link to="/forgot-password">Forgot password?</Link>
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary auth-button">
              Login
            </button>
          </form>
          
          <div className="auth-footer">
            <p>Don't have an account? <Link to="/register">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login; 