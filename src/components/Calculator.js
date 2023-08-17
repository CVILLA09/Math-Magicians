import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Display from './Display';
import Button from './Button';
import './Calculator.css';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState(
    { total: null, next: null, operation: null },
  );

  // Click event handler function
  const handleButtonClick = (buttonName) => {
    const newCalculatorData = calculate(calculatorData, buttonName);
    setCalculatorData(newCalculatorData);
  };

  return (
    <div className="calculator">
      <Display value={calculatorData.next || calculatorData.total || '0'} />
      <div className="buttons">
        <Button label="AC" onClick={() => handleButtonClick('AC')} />
        <Button label="+/-" onClick={() => handleButtonClick('+/-')} />
        <Button label="%" onClick={() => handleButtonClick('%')} />
        <Button label="÷" onClick={() => handleButtonClick('÷')} />
        <Button label="7" onClick={() => handleButtonClick('7')} />
        <Button label="8" onClick={() => handleButtonClick('8')} />
        <Button label="9" onClick={() => handleButtonClick('9')} />
        <Button label="x" onClick={() => handleButtonClick('x')} />
        <Button label="4" onClick={() => handleButtonClick('4')} />
        <Button label="5" onClick={() => handleButtonClick('5')} />
        <Button label="6" onClick={() => handleButtonClick('6')} />
        <Button label="-" onClick={() => handleButtonClick('-')} />
        <Button label="1" onClick={() => handleButtonClick('1')} />
        <Button label="2" onClick={() => handleButtonClick('2')} />
        <Button label="3" onClick={() => handleButtonClick('3')} />
        <Button label="+" onClick={() => handleButtonClick('+')} />
        <Button label="0" onClick={() => handleButtonClick('0')} />
        <Button label="." onClick={() => handleButtonClick('.')} />
        <Button label="=" onClick={() => handleButtonClick('=')} />
      </div>
    </div>
  );
};

export default Calculator;
