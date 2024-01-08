import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './main';

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

test('caesarCipher() works with ridiculously high positive shift factor', () => {
  expect(caesarCipher('monday', 333)).toBe('rtsif3');
});

test('caesarCipher() works with ridiculously high negative shift factor', () => {
  expect(caesarCipher('monday', -111)).toBe('y0zpm ');
});

test('caesarCipher() works with basic punctuation', () => {
  expect(caesarCipher('monday, dammit!', 2)).toBe('oqpfc0!,fcookvb');
});

test('caesarCipher() works with numbers', () => {
  expect(caesarCipher('43534xDDDD', -15)).toBe('poqopi3333');
});

test('caesarCipher() keeps the same case', () => {
  expect(caesarCipher('FUN TImes', 17)).toBe('W.4m Z3v9');
});

test('caesarCipher() wraps text', () => {
  expect(caesarCipher('6789', 4)).toBe(' .,?');
});

test('caesarCipher() wraps text the other way', () => {
  expect(caesarCipher(',,,,', -3)).toBe('9999');
});

// analyzeArray() function
test('object created by analyzeArray() has correct average property', () => {
  const object1 = analyzeArray([1, 8, 3, 4, 2, 6]);
  const object2 = analyzeArray([20, 5555, 1, 23, 954, 232, 4, 2222, 4894]);
  expect(object1.average).toBe(4);
  expect(object2.average).toBe(1545);
});

test('object created by analyzeArray() has correct min property', () => {
  const object1 = analyzeArray([1, 8, 3, 4, 2, 6]);
  const object2 = analyzeArray([20, 5555, 1, 23, 954, 232, 4, 2222, 4894]);
  expect(object1.min).toBe(1);
  expect(object2.min).toBe(1);
});

test('object created by analyzeArray() has correct max property', () => {
  const object1 = analyzeArray([1, 8, 3, 4, 2, 6]);
  const object2 = analyzeArray([20, 5555, 1, 23, 954, 232, 4, 2222, 4894]);
  expect(object1.max).toBe(8);
  expect(object2.max).toBe(5555);
});

test('object created by analyzeArray() has correct length property', () => {
  const object1 = analyzeArray([1, 8, 3, 4, 2, 6]);
  const object2 = analyzeArray([20, 5555, 1, 23, 954, 232, 4, 2222, 4894]);
  expect(object1.length).toBe(6);
  expect(object2.length).toBe(9);
});
