import { capitalize } from './main';

// capitalize() function tests
test('capitalize() works for lowercase strings', () => {
  expect(capitalize('saturday')).toBe('Saturday');
});

test('capitalize() works for uppercase strings', () => {
  expect(capitalize('TESTINGISFUN')).toBe('TESTINGISFUN');
});

test('capitalize() does not break when number strings are used', () => {
  expect(capitalize('45544')).toBe('45544');
});
