import calculate from './calculate';

const testObj = {
  total: null,
  next: null,
  operation: null,
};

const testObj2 = {
  total: 100,
  next: 50,
  operation: 'x',
};

const testObj3 = {
  total: '5000',
  next: null,
  operation: null,
};

const testObj4 = {
  total: '-5000',
  next: null,
  operation: null,
};

const testObj5 = {
  total: '5000',
  next: '5000.',
  operation: null,
};

describe('Testing calculate function', () => {
  test('Test AC button', () => {
    expect(calculate(testObj, 'AC')).toEqual(testObj);
  });

  test('Test = button', () => {
    expect(calculate(testObj2, '=')).toEqual(testObj3);
  });

  test('Test +/- button', () => {
    expect(calculate(testObj3, '+/-')).toEqual(testObj4);
  });

  test('Test . button', () => {
    expect(calculate(testObj3, '.')).toEqual(testObj5);
  });
});
