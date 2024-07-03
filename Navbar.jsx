import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton.jsx';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center bg-gray-800 text-white py-4 px-6">
      <div className="flex items-center">
        <Link to="/" className="nav-link block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200">Home</Link>
        <Link to="/user" className="nav-link block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200">User</Link>
        <Link to="/admin" className="nav-link block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200">Admin</Link>
      </div>
      <BackButton />
    </nav>
  );
};

export default Navbar;