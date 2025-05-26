import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <div className="logo">
              <span className="logo-icon">CP</span>
              <span className="logo-text">Customer Portal</span>
            </div>
          </Link>
        </div>

        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li className="nav-button">
            <Link to="/login" className="btn-nav btn-primary">Login</Link>
          </li>
          <li className="nav-button">
            <Link to="/register" className="btn-nav btn-secondary">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 