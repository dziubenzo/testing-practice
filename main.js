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
