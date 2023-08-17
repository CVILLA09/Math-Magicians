import PropTypes from 'prop-types'; // Add this line
import './Calculator.css';

const Display = ({ value }) => (
  <div className="display">
    {value}
  </div>
);

// Add these lines to define the propTypes
Display.propTypes = {
  value: PropTypes.string,
};

Display.defaultProps = {
  value: '0',
};

export default Display;