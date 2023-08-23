import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav>
    <div>Math Magicians</div>
    <div>
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
