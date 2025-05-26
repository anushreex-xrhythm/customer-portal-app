import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <ul>
          <li>Overview</li>
          <li>Settings</li>
          <li>Billing</li>
        </ul>
      </aside>
      <main className="dashboard-content">
        <h2>Dashboard</h2>
        <div className="cards">
          <div className="card">Account Status: Active</div>
          <div className="card">Recent Activity</div>
          <div className="card">Messages</div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard; 