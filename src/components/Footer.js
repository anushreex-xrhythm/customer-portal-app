import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Customer Portal</h3>
            <p className="footer-description">
              Your one-stop solution for managing your account, viewing profiles, and getting support.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/support">Support</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Connect With Us</h3>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="social-icon">F</i>
              </a>
              <a href="#" className="social-link">
                <i className="social-icon">T</i>
              </a>
              <a href="#" className="social-link">
                <i className="social-icon">I</i>
              </a>
              <a href="#" className="social-link">
                <i className="social-icon">L</i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Customer Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 