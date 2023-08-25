import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav>
    <div className="navbar-title">Math Magicians</div>
    <div className="navbar-links">
      <Link to="/">Home</Link>
      {' '}
      |
      {' '}
      <Link to="/calculator">Calculator</Link>
      {' '}
      |
      {' '}
      <Link to="/quotes">Quotes</Link>
    </div>
  </nav>
);

export default Navbar;
