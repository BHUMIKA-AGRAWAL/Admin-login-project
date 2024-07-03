import React, { useState } from 'react';
import UserForm from './UserForm';
import './Navbar.css';
const User = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [signInStatus, setSignInStatus] = useState('');
  const [submittedData, setSubmittedData] = useState([]);
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

    if (!formData.username || !formData.password) {                           
      setError('Please enter both username and password.');
      return;  
    }

    if (formData.username === 'user' && formData.password === 'user') {
      setIsLoggedIn(true);
      setSignInStatus('Sign in successful!');
    } else {
      setSignInStatus('Sign in failed. Please check your username and password.');
    }
  };

  const handleFormDataSubmit = (data) => {
    setSubmittedData((prevData) => [...prevData, data]);
  };

  const updateUserFormUrl = () => {
    window.history.pushState(null, '', '/user/UserForm');
  };
  return (
    <div className="container">
      {!isLoggedIn ? (
        <div className="form-container">
          <h1 className="text-2xl font-bold mb-4">User Login</h1>
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
          {signInStatus && <p className="error-message">{signInStatus}</p>}
        </div>
      ) : (
        <div>
          <UserForm onFormDataSubmit={handleFormDataSubmit} updateUrl={updateUserFormUrl} />
          {submittedData.length > 0 && (
            <div className="mt-4">
              <h2 className="text-lg font-bold mb-2">Submitted Data:</h2>
              {submittedData.map((data, index) => (
                <div key={index} className="border rounded p-4 mb-4 bg-gray-100">
                  <p>User ID: {data.userId}</p>
                  <p>Name: {data.name}</p>
                  <p>City: {data.city}</p>
                  <p>Phone Number: {data.phoneNumber}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
              }  
export default User;
