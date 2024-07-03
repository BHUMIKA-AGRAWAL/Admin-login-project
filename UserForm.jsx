import React, { useState } from 'react';
import './Navbar.css';

const UserForm = ({ onFormDataSubmit, updateUrl }) => {
  const [formData, setFormData] = useState({ userId: '', name: '', city: '', phoneNumber: '' });
  const [termsChecked, setTermsChecked] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    // Validate Mobile Number: Allow only 10 digits
    if (name === 'phoneNumber') {
      // Allow typing in the textbox while still enforcing the 10-digit limit
      updatedValue = value.replace(/\D/g, '').slice(0, 10); // Remove non-digit characters and limit to 10 digits
    }

    // Validate City: Allow only alphabetic characters and spaces
    if (name === 'city') {
      updatedValue = value.replace(/[^A-Za-z\s]/g, ''); // Remove non-alphabetic characters except spaces
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleCheckboxChange = () => {
    setTermsChecked(!termsChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if terms and conditions are checked
    if (!termsChecked) {
      setError("Please agree to the terms and conditions.");
      return; 
    }

    
    if (!formData.userId || !formData.name || !formData.city || !formData.phoneNumber) {
      setError("All fields are required.");
      return; 
    }

    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    
    
    if (storedData.some(data => data.userId === formData.userId)) {
      setError("This ID already exists. Please choose a different one.");
      return;
    }

  
    setError('');

    const updatedData = [...storedData, formData];
    localStorage.setItem('formData', JSON.stringify(updatedData));
    onFormDataSubmit(formData);
    updateUrl();
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="text-2xl font-bold mb-4">Form</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Enter the id"
            name="userId"
            value={formData.userId}
            onChange={handleInputChange}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Enter the name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Enter the city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Enter the contact details"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="input-field"
          />
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={termsChecked}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <span className="text-sm">Terms and Conditions</span>
          </label>
          <button type="submit" className="btn-submit">
            Submit
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
      <div className="submitted-data mt-8">
        
      </div>
    </div>
  );
};

export default UserForm;
