export function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  return Array.from(string).reverse().join('');
}

export const calculator = {
  add(num1, num2) {
    return num1 + num2;
  },

  subtract(num1, num2) {
    return num1 - num2;
  },

  divide(num1, num2) {
    if (num2 === 0) {
      throw new Error('You cannot divide by 0, you dum-dum!');
    }
    return num1 / num2;
  },

  multiply(num1, num2) {
    return num1 * num2;
  },
};
