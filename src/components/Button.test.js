import React from 'react'; // Importing React for JSX syntax
import renderer from 'react-test-renderer';
import Button from './Button';
// Splitting the import statement into two lines
import calculate from '../logic/calculate';

const handleButtonClick = (buttonName) => {
  const calculatorData = { total: null, next: null, operation: null };
  calculate(calculatorData, buttonName);
};

it('renders correctly', () => {
  const tree = renderer
    .create(<Button
      label="AC"
      onClick={() => handleButtonClick('AC')}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
