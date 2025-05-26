import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [activeTab, setActiveTab] = useState('personal');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-avatar">
          <div className="avatar-placeholder">JD</div>
          <button className="change-avatar-btn">Change</button>
        </div>
        <div className="profile-info-header">
          <h2>John Doe</h2>
          <p>Premium Member since January 2023</p>
        </div>
      </div>
      
      <div className="profile-tabs">
        <div 
          className={`profile-tab ${activeTab === 'personal' ? 'active' : ''}`}
          onClick={() => handleTabChange('personal')}
        >
          Personal Info
        </div>
        <div 
          className={`profile-tab ${activeTab === 'security' ? 'active' : ''}`}
          onClick={() => handleTabChange('security')}
        >
          Security
        </div>
        <div 
          className={`profile-tab ${activeTab === 'preferences' ? 'active' : ''}`}
          onClick={() => handleTabChange('preferences')}
        >
          Preferences
        </div>
      </div>
      
      <div className="profile-content">
        {activeTab === 'personal' && (
          <div className="profile-section">
            <h3>Personal Information</h3>
            <div className="profile-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" value="John" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" value="Doe" />
                </div>
              </div>
              
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" value="john@example.com" />
              </div>
              
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" value="+1 (555) 123-4567" />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input type="text" value="Seattle" />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <input type="text" value="WA" />
                </div>
              </div>
              
              <div className="form-actions">
                <button className="btn btn-primary">Save Changes</button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'security' && (
          <div className="profile-section">
            <h3>Security Settings</h3>
            <div className="profile-form">
              <div className="form-group">
                <label>Current Password</label>
                <input type="password" placeholder="Enter current password" />
              </div>
              
              <div className="form-group">
                <label>New Password</label>
                <input type="password" placeholder="Enter new password" />
              </div>
              
              <div className="form-group">
                <label>Confirm New Password</label>
                <input type="password" placeholder="Confirm new password" />
              </div>
              
              <div className="form-group toggle-group">
                <span>Two-Factor Authentication</span>
                <div className="toggle-switch">
                  <div className="toggle-switch-handle"></div>
                </div>
              </div>
              
              <div className="form-actions">
                <button className="btn btn-primary">Update Security</button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'preferences' && (
          <div className="profile-section">
            <h3>User Preferences</h3>
            <div className="profile-form">
              <div className="form-group toggle-group">
                <span>Email Notifications</span>
                <div className="toggle-switch active">
                  <div className="toggle-switch-handle"></div>
                </div>
              </div>
              
              <div className="form-group toggle-group">
                <span>SMS Notifications</span>
                <div className="toggle-switch">
                  <div className="toggle-switch-handle"></div>
                </div>
              </div>
              
              <div className="form-group">
                <label>Language</label>
                <select>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Time Zone</label>
                <select>
                  <option>Pacific Time (PT)</option>
                  <option>Eastern Time (ET)</option>
                  <option>Central Time (CT)</option>
                  <option>Mountain Time (MT)</option>
                </select>
              </div>
              
              <div className="form-actions">
                <button className="btn btn-primary">Save Preferences</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile; 