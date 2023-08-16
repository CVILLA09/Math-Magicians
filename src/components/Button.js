import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label }) => {
    // Determine the class name based on the label value
    let buttonClass = 'button';
    if (label === '0') buttonClass += ' button-0';
    if (['÷', 'X', '-', '='].includes(label)) buttonClass += ' button-orange';
  
    return (
      <button className={buttonClass}>
        {label}
      </button>
    );
  };  

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
