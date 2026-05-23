// src/components/Login.jsx
import React, { useState } from 'react';
import './Login.css'; // Simple custom component styles

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Mock Authentication Logic (For frontend development)
    setTimeout(() => {
      setLoading(false);
      if (email === 'admin@company.com' && password === 'admin123') {
        const mockUser = {
          name: 'Alice Dev',
          role: 'Software Architect',
          department: 'Engineering'
        };
        onLoginSuccess(mockUser);
      } else {
        setError('Invalid credentials. Try: admin@company.com / admin123');
      }
    }, 800);
  };

  return (
    <div className="login-card">
      <div className="login-header">
        <h2>Employee Login</h2>
        <p>Enter your credentials to access the portal</p>
      </div>

      {error && <div className="error-banner">{error}</div>}

      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email Address</label>
          <input 
            type="email" 
            className="input-field"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            className="input-field"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>

        <button type="submit" className="btn-primary w-full" disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}