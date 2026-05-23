import React, { useState } from 'react';
import './Dashboard.css';

export default function Dashboard({ user, onLogout }) {
  const [clockedIn, setClockedIn] = useState(false);
  const [logs, setLogs] = useState([]);

  const handleClockToggle = () => {
    const timeString = new Date().toLocaleTimeString();
    const nextState = !clockedIn;
    setClockedIn(nextState);
    setLogs(prev => [`${nextState ? '📥 Clocked In' : '📤 Clocked Out'} at ${timeString}`, ...prev]);
  };

  return (
    <div className="layout-wrapper">
      <nav className="sidebar">
        <div className="nav-item active">Workday</div>
        <button className="nav-item">My Profile</button>
      </nav>

      <main className="dashboard-container">
        <header className="dash-header">
          <div>
            <h1 className="dash-title">Welcome, {user.name}</h1>
            <p className="role-tag">{user.role} | Dept: {user.department}</p>
          </div>
          <button className="btn-secondary" onClick={onLogout}>Logout</button>
        </header>

        <div className="dash-grid">
          <div className="dash-card">
            <h3 className="card-title">Work Shift Clock</h3>
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

            {logs.length > 0 && (
              <div className="logs-wrapper">
                <span className="logs-header">Shift Activities Log:</span>
                <div className="logs-list">
                  {logs.map((log, index) => (
                    <p key={index} className="log-row">{log}</p>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="dash-card">
            <h3 className="card-title">Corporate Announcements</h3>
            <ul className="bulletin-list">
              <li>
                <span className="bulletin-date">May 20</span>
                <p className="bulletin-desc">Quarterly Employee Benefits Review documentation has been updated.</p>
              </li>
              <li>
                <span className="bulletin-date">May 18</span>
                <p className="bulletin-desc">Scheduled portal database maintenance this Friday from 10 PM to Midnight.</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}