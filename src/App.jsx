import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Employees from './components/Employees';
import './index.css';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [activeView, setActiveView] = useState('dashboard');

  const handleLogout = () => setCurrentUser(null);

  if (!currentUser) {
    return (
      <div className="app-container">
        <Login onLoginSuccess={setCurrentUser} />
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="portal-top-bar">
        <h2 className="portal-brand">CORE CORPORATE PORTAL</h2>
        <button className="user-trigger" onClick={handleLogout}>Logout</button>
      </header>

      <div className="main-portal-wrapper">
        <nav className="sidebar">
          <button
            className={`nav-item ${activeView === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveView('dashboard')}
          >
            Workday
          </button>
          <button
            className={`nav-item ${activeView === 'employees' ? 'active' : ''}`}
            onClick={() => setActiveView('employees')}
          >
            Employees
          </button>
        </nav>

        {/* Dashboard is rendered here when activeView is 'dashboard' */}
        <main className="portal-content">
          {activeView === 'dashboard' ? (
            <Dashboard user={currentUser} />
          ) : (
            <Employees user={currentUser} />
          )}
        </main>
      </div>
    </div>
  );
}