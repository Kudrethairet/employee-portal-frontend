import React, { useState } from 'react';
import './Dashboard.css';
import { User } from '../types'; // Import from central file



interface DashboardProps {
  user: User;
}

export default function Dashboard({ user }: DashboardProps) {
  const [clockedIn, setClockedIn] = useState<boolean>(false);
  const [logs, setLogs] = useState<string[]>([]);

  const handleClockToggle = (): void => {
    const timeString: string = new Date().toLocaleTimeString();
    const nextState: boolean = !clockedIn;
    setClockedIn(nextState);
    setLogs((prev: string[]) => [`${nextState ? '📥 Clocked In' : '📤 Clocked Out'} at ${timeString}`, ...prev]);
  };

  return (
    <>
      <header className="dash-header">
        <h1 className="dash-title">Welcome, {user.name.split(' ')[0]} Dev</h1>
        <p className="role-tag">{user.role} | Dept: {user.department}</p>
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
            className={`btn-action ${clockedIn ? 'btn-red' : 'btn-green'}`}
            onClick={handleClockToggle}
          >
            {clockedIn ? 'Clock Out Now' : 'Clock In Now'}
          </button>

          {logs.length > 0 && (
            <div className="logs-wrapper">
              <span className="logs-header">Shift Activities Log:</span>
              <div className="logs-list">
                {logs.map((log: string, index: number) => (
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
    </>
  );
}