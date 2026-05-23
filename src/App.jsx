// ==========================================
// 1. Component Imports & Assets
// ==========================================
import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './index.css';

// ==========================================
// 2. Main App Component & Core View Routing
// ==========================================
export default function App() {
  // Global authenticated user state (null when logged out)
  const [currentUser, setCurrentUser] = useState(null);

  // --- Callback Handlers ---
  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    
  };
  const handleLogout = () => {
    setCurrentUser(null);
  };

  // ==========================================
  // 3. Render Output
  // ==========================================
  return (
    <div className="app-container">
      {currentUser ? (
        <Dashboard user={currentUser} onLogout={handleLogout} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}