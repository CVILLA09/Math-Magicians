import renderer from 'react-test-renderer';
import Button from './Button';

const handleButtonClick = (buttonName) => {
  const newCalculatorData = calculate(calculatorData, buttonName);
};

it('renders correctly', () => {
  const tree = renderer
    .create(<Button label="AC" onClick={() => handleButtonClick('AC')} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
