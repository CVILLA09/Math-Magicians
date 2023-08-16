import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label }) => (
  <button className={`button ${label === '0' ? 'wide' : 'narrow'} height`}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
