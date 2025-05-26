import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="user-info">
            <div className="user-avatar">JD</div>
            <div className="user-details">
              <h3>John Doe</h3>
              <p>Premium User</p>
            </div>
          </div>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            <li 
              className={activeTab === 'overview' ? 'active' : ''} 
              onClick={() => handleTabChange('overview')}
            >
              <span className="nav-icon">📊</span>
              <span>Overview</span>
            </li>
            <li 
              className={activeTab === 'activity' ? 'active' : ''} 
              onClick={() => handleTabChange('activity')}
            >
              <span className="nav-icon">📅</span>
              <span>Activity</span>
            </li>
            <li 
              className={activeTab === 'settings' ? 'active' : ''} 
              onClick={() => handleTabChange('settings')}
            >
              <span className="nav-icon">⚙️</span>
              <span>Settings</span>
            </li>
            <li 
              className={activeTab === 'billing' ? 'active' : ''} 
              onClick={() => handleTabChange('billing')}
            >
              <span className="nav-icon">💳</span>
              <span>Billing</span>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="dashboard-content">
        <div className="dashboard-header">
          <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
          <div className="header-actions">
            <button className="btn btn-secondary">Export Data</button>
            <button className="btn btn-primary">+ New Action</button>
          </div>
        </div>

        {activeTab === 'overview' && (
          <div className="dashboard-overview">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-header">
                  <h3>Account Status</h3>
                  <span className="stat-icon active">●</span>
                </div>
                <div className="stat-value">Active</div>
                <div className="stat-description">Since Jan 15, 2023</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-header">
                  <h3>Usage</h3>
                  <span className="stat-icon">📈</span>
                </div>
                <div className="stat-value">85%</div>
                <div className="stat-description">Of your monthly limit</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-header">
                  <h3>Messages</h3>
                  <span className="stat-icon">✉️</span>
                </div>
                <div className="stat-value">12</div>
                <div className="stat-description">3 unread</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-header">
                  <h3>Subscription</h3>
                  <span className="stat-icon">⭐</span>
                </div>
                <div className="stat-value">Premium</div>
                <div className="stat-description">Renews in 45 days</div>
              </div>
            </div>
            
            <div className="recent-activity">
              <h3>Recent Activity</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon login">🔐</div>
                  <div className="activity-details">
                    <h4>Login from new device</h4>
                    <p>Windows PC • Seattle, WA</p>
                    <span className="activity-time">2 hours ago</span>
                  </div>
                </div>
                
                <div className="activity-item">
                  <div className="activity-icon payment">💰</div>
                  <div className="activity-details">
                    <h4>Payment processed</h4>
                    <p>Invoice #12345 • $49.99</p>
                    <span className="activity-time">Yesterday</span>
                  </div>
                </div>
                
                <div className="activity-item">
                  <div className="activity-icon update">🔄</div>
                  <div className="activity-details">
                    <h4>Profile updated</h4>
                    <p>You changed your email address</p>
                    <span className="activity-time">3 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab !== 'overview' && (
          <div className="placeholder-content">
            <h3>Coming Soon</h3>
            <p>This section is under development. Check back soon for updates!</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard; 