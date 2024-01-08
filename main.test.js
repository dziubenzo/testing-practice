import { capitalize, reverseString, calculator } from './main';

// capitalize() function
test('capitalize() works for lowercase strings', () => {
  expect(capitalize('saturday')).toBe('Saturday');
});

test('capitalize() works for uppercase strings', () => {
  expect(capitalize('TESTINGISFUN')).toBe('TESTINGISFUN');
});

test('capitalize() works for number strings', () => {
  expect(capitalize('45544')).toBe('45544');
});

// reverseString() function
test('reverseString() works for lowercase strings', () => {
  expect(reverseString('saturday')).toBe('yadrutas');
});

test('reverseString() works for uppercase strings', () => {
  expect(reverseString('QUOKKAISFUN')).toBe('NUFSIAKKOUQ');
});

test('reverseString() works for strings with numbers', () => {
  expect(reverseString('fun3string6')).toBe('6gnirts3nuf');
});

test('reverseString() works for mixed strings', () => {
  expect(reverseString('5test6JEST7')).toBe('7TSEJ6tset5');
});

// calculator object, adding more expects seems reasonable in this case?
test('calculator.add() works', () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.add(15, 2)).toBe(17);
  expect(calculator.add(-5, 5)).toBe(0);
  expect(calculator.add(0, 0)).toBe(0);
});

test('calculator.subtract() works', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.subtract(15, 2)).toBe(13);
  expect(calculator.subtract(-5, -5)).toBe(0);
  expect(calculator.subtract(0, -12)).toBe(12);
});

test('calculator.divide() works', () => {
  expect(calculator.divide(6, 2)).toBe(3);
  expect(calculator.divide(15, 2)).toBe(7.5);
  expect(calculator.divide(-5, -5)).toBe(1);
  expect(calculator.divide(0, 12)).toBe(0);
});

test('calculator.divide() throws an error when divisor is 0', () => {
  expect(() => {
    calculator.divide(6, 0);
  }).toThrow();
});

test('calculator.multiply() works', () => {
  expect(calculator.multiply(6, 2)).toBe(12);
  expect(calculator.multiply(15, 2)).toBe(30);
  expect(calculator.multiply(-5, -5)).toBe(25);
  expect(calculator.multiply(1, -12)).toBe(-12);
});

// caesarCipher() function
test('caesarCipher() works with positive shift factor', () => {
  expect(caesarCipher('monday', 3)).toBe('prqgd1');
});

test('caesarCipher() works with negative shift factor', () => {
  expect(caesarCipher('monday', -5)).toBe('hji? t');
});

test('caesarCipher() works with basic punctuation', () => {
  expect(caesarCipher('monday, dammit!', 2)).toBe('oqpfc0!,fcookvb');
});

test('caesarCipher() works with numbers', () => {
  expect(caesarCipher('monday, dammit!', -15)).toBe('mpuvh0jdve!v70g4v5f?z');
});

test('caesarCipher() keeps the same case', () => {
  expect(caesarCipher('fun times', 17)).toBe('w.4m z3v9');
});

test('caesarCipher() wraps text', () => {
  expect(caesarCipher('6789', 4)).toBe(' .,?');
});
