import React from 'react';
import axios from 'axios';
import '../styles/logout.css';

const Logout = () => {
  const handleLogout = async () => {
    try {
      // Call the backend logout endpoint
      await axios.post('http://localhost:5230/api/account/logout');
      // Redirect to the login page or perform any other action after logout
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
