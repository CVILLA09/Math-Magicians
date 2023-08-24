import calculate from './calculate';

let testObj = {
  total: null,
  next: null,
  operation: null,
}

let testObj2 = {
  total: 100,
  next: 50,
  operation: 'x',
}

let testObj3 = {
  total: "5000",
  next: null,
  operation: null,
}

let testObj4 = {
  total: "-5000",
  next: null,
  operation: null,
}

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
});
