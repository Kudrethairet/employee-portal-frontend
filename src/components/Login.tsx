import React, { useState } from 'react';
import './Login.css';
import { User } from '../types'; // Import from central file



interface LoginProps {
  onLoginSuccess: (user: User) => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (email === 'admin@company.com' && password === '1234') {
        const mockUser: User = {
          name: 'Alice Dev',
          role: 'Software Architect',
          department: 'Engineering'
        };
        onLoginSuccess(mockUser);
      } else {
        setError('Invalid credentials.');
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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