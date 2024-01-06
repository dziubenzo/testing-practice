import { capitalize, reverseString } from './main';

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

// calculator object