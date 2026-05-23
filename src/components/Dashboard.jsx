// src/components/Dashboard.jsx
import React, { useState } from 'react';
import './Dashboard.css'; // Simple custom dashboard styles

export default function Dashboard({ user, onLogout }) {
  const [clockedIn, setClockedIn] = useState(false);
  const [lastAction, setLastAction] = useState(null);

  const handleClockToggle = () => {
    const timeString = new Date().toLocaleTimeString();
    setClockedIn(!clockedIn);
    setLastAction(`${!clockedIn ? 'Clocked In' : 'Clocked Out'} at ${timeString}`);
  };

  return (
    <div className="dashboard-container">
      <header className="dash-header">
        <div>
          <h1>Welcome, {user.name}</h1>
          <p className="role-tag">{user.role} | Dept: {user.department}</p>
        </div>
        <button className="btn-secondary" onClick={onLogout}>Logout</button>
      </header>

      <div className="dash-grid">
        {/* Time Card Section */}
        <div className="dash-card">
          <h3>Work Shift Clock</h3>
          <p className="card-desc">Record your shifts for accurate payroll processing.</p>
          
          <div className="status-indicator">
            <span className={`status-dot ${clockedIn ? 'active' : 'inactive'}`}></span>
            <span>Status: <strong>{clockedIn ? 'Clocked In' : 'Clocked Out'}</strong></span>
          </div>

          <button 
            onClick={handleClockToggle} 
            className={`btn-action ${clockedIn ? 'btn-red' : 'btn-green'}`}
          >
            {clockedIn ? 'Clock Out Now' : 'Clock In Now'}
          </button>

          {lastAction && <p className="last-log">{lastAction}</p>}
        </div>

        {/* Corporate Bulletins */}
        <div className="dash-card">
          <h3>Corporate Announcements</h3>
          <ul className="bulletin-list">
            <li>
              <span className="bulletin-date">May 20</span>
              <p>Quarterly Employee Benefits Review documentation has been updated.</p>
            </li>
            <li>
              <span className="bulletin-date">May 18</span>
              <p>Scheduled portal database maintenance this Friday from 10 PM to Midnight.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}