// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'; // Import header styles

const Header = ({ isLoggedIn }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="navbar-brand">GodCity World</Link>
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