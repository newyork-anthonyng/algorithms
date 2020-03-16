function romanToInt(s) {
  let result = 0;

  let previousResult = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const currentNumber = convert(s[i]);

    if (currentNumber < previousResult) {
      result -= currentNumber;
    } else {
      result += currentNumber;
      previousResult = currentNumber;
    }
  }

  return result;
}

function convert(s) {
  switch(s) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
  }
}

console.assert(romanToInt('III') === 3, 'III === 3');
console.assert(romanToInt('IV') === 4, 'IV === 4');
console.assert(romanToInt('IX') === 9, 'IX === 9');
console.assert(romanToInt('LVIII') === 58, 'LVIII === 58');
console.assert(romanToInt('MCMXCIV') === 1994, 'MCMXCIV === 1994');