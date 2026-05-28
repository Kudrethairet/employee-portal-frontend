import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Employees from './components/Employees';
import { User } from './types'; 
import './index.css';

export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [activeView, setActiveView] = useState<string>('dashboard');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleLogout = (): void => {
    setIsDropdownOpen(false);
    setCurrentUser(null);
  };

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
        <div className="user-menu-container">
          <button className="user-trigger" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {currentUser.firstName}
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button className="dropdown-item" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </header>

      <div className="main-portal-wrapper">
        <nav className="sidebar">
          <button className={`nav-item ${activeView === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveView('dashboard')}>Workday</button>
          <button className={`nav-item ${activeView === 'employees' ? 'active' : ''}`} onClick={() => setActiveView('employees')}>Employees</button>
        </nav>
        <main className="portal-content">
          {activeView === 'dashboard' ? <Dashboard user={currentUser} /> : <Employees user={currentUser} />}
        </main>
      </div>
    </div>
  );
}