import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to create a corresponding CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        TU Gaming {/* You can replace this with your logo */}
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        {/* Add more navigation links as needed */}
      </div>
    </nav>
  );
};

export default Navbar;
