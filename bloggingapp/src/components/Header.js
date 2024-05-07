// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import your logo image
import '../styles/header.css'; // Import header styles

const Header = ({ isLoggedIn }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          {/* Add the logo as an <img> within the navbar-brand */}
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" className="logo" />
            DTruepath
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/posts" className="nav-link">Posts</Link>
            </li>
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link to="/create" className="nav-link">Create Post</Link>
                </li>
                <li className="nav-item">
                  <Link to="/logout" className="nav-link">Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
