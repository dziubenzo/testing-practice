export function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  return Array.from(string).reverse().join('');
}

const calculator = {};
