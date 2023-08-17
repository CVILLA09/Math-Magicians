import React, { useState } from 'react';
import calculate from './logic/calculate';
import Display from './Display';
import Button from './Button';
import './Calculator.css';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({ total: null, next: null, operation: null });

  // Click event handler function
  const handleButtonClick = (buttonName) => {
    const newCalculatorData = calculate(calculatorData, buttonName);
    setCalculatorData(newCalculatorData);
  };
  
  return (
    <div className="calculator">
      <Display />
      <div className="buttons">
        <Button label="AC" />
        <Button label="+/-" />
        <Button label="%" />
        <Button label="÷" />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="x" />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" />
        <Button label="0" />
        <Button label="." />
        <Button label="=" />
      </div>
    </div>
  );
};

export default Calculator;
