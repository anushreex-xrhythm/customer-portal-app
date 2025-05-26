import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to <span className="text-primary">Customer Portal</span></h1>
          <p className="hero-subtitle">Your one-stop solution for managing your account, viewing your profile, and getting support.</p>
          <div className="hero-buttons">
            <Link to="/register" className="btn btn-primary">Get Started</Link>
            <Link to="/login" className="btn btn-secondary">Login</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <div className="dashboard-preview"></div>
          </div>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">Why Choose Our Portal</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Easy Dashboard</h3>
            <p>Manage all your information in one place with our intuitive dashboard.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Access</h3>
            <p>Your data is protected with industry-standard security protocols.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile Friendly</h3>
            <p>Access your portal from any device, anywhere, anytime.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to get started?</h2>
        <p>Join thousands of satisfied customers who manage their accounts with ease.</p>
        <Link to="/register" className="btn btn-accent">Create Your Account</Link>
      </section>
    </div>
  );
}

export default Home; 