import React, { useState } from 'react';
import './Navbar.css';

const Admin = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [signInStatus, setSignInStatus] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
    setError('');
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    const hardcodedUsername = 'admin';
    const hardcodedPassword = 'admin@123';
    if (!formData.username || !formData.password) {
      setError('Please enter both username and password.');
    } else if (formData.username === hardcodedUsername && formData.password === hardcodedPassword) {
      setSignInStatus('Sign in successful!');
      window.location.href = '/admin/UserList';
    } else {
      setError('Sign in failed. Please check your credentials.');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Admin Login</h1>
        <form onSubmit={handleSignIn} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="input-field"
          />
          <button type="submit" className="btn-submit">
            Sign In
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {signInStatus && <p className="success-message">{signInStatus}</p>}
      </div>
    </div>
  );
};

export default Admin;
