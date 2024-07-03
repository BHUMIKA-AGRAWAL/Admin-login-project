import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => {                           //for navigate previous page
  const handleGoBack = () => {
    window.history.back();
  };

  return (                           //rendering back button
    <nav className="flex justify-between items-center bg-gray-800 text-white py-4 px-6">           
     
      <button onClick={handleGoBack} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        Back
      </button>
    </nav>
  );
};

export default BackButton;