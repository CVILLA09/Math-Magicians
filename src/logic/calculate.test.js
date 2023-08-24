import calculate from './calculate';

let testObj = {
  total: null,
  next: null,
  operation: null,
}

describe('Testing calculate function', () => {
  test('Test button', () => {
    expect(calculate(testObj, 'AC')).toEqual(testObj);
  });
});
