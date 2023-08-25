import operate from './operate';

describe('Testing operate function', () => {
  test('Addition', () => {
    expect(operate(26, 24, '+')).toEqual('50');
  });
  test('Subtraction', () => {
    expect(operate(26, 24, '-')).toEqual('2');
  });
  test('Multiplication', () => {
    expect(operate(4, 4, 'x')).toEqual('16');
  });
  test('Division', () => {
    expect(operate(100, 4, '÷')).toEqual('25');
  });
});
