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

export function caesarCipher(text, shiftFactor) {
  const lowerAlphabet = Array.from(' .,?!abcdefghijklmnopqrstuvwxyz0123456789');
  const upperAlphabet = Array.from(' .,?!ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
  let result = '';
  const textArray = Array.from(text);
  for (const letter of textArray) {
    let index;
    let newLetter;
    if (lowerAlphabet.includes(letter)) {
      index = lowerAlphabet.indexOf(letter);
      const newIndex =
        (((index + shiftFactor) % lowerAlphabet.length) +
          lowerAlphabet.length) %
        lowerAlphabet.length;
      newLetter = lowerAlphabet[newIndex];
    } else {
      index = upperAlphabet.indexOf(letter);
      const newIndex =
        (((index + shiftFactor) % lowerAlphabet.length) +
          lowerAlphabet.length) %
        lowerAlphabet.length;
      newLetter = upperAlphabet[newIndex];
    }
    result += newLetter;
  }
  return result;
}

const array1 = [1, 8, 3, 4, 2, 6];
const array2 = [20, 5555, 1, 23, 954, 232, 4, 2222, 4894];

export function analyzeArray(array) {
  const length = array.length;
  const average =
    array.reduce((previous, current) => (previous += current), 0) / length;
  const sortedArray = array.toSorted((a, b) => a - b);
  const min = sortedArray[0];
  const max = sortedArray[length - 1];
  return { average, min, max, length };
}
