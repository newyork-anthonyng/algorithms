const mapping = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz'
};

function letterCombinations(digits) {
  if (digits.length === 0) return [];
  if (digits.length === 1) {
    return mapping[digits].split('');
  }

  const firstDigit = digits[0];
  const mappedLetters = mapping[firstDigit];

  const result = [];
  const applesauce = letterCombinations(digits.slice(1));
  for (let i = 0; i < mappedLetters.length; i++) {
    const currentLetter = mappedLetters[i];

    for (let j = 0; j < applesauce.length; j++) {
      const currentApple = applesauce[j];
      result.push(currentLetter + currentApple);
    }
  }

  return result;
}

let result = letterCombinations('234');
