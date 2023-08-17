import React from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';

const Button = ({ label, onClick }) => {
  // Determine the class name based on the label value
  let buttonClass = 'button';
  if (label === '0') buttonClass += ' button-0';
  if (['÷', 'x', '+', '-', '='].includes(label)) buttonClass += ' button-orange';

  return (
    <button type="button" className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired, // Add this line
};

export default Button;