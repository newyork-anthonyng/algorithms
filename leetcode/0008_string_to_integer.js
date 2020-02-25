/**
 * @param {string} str
 * @return {number}
 */
const MIN_NUMBER = -Math.pow(2, 31);
const MAX_NUMBER = Math.pow(2, 31) - 1;
const NUMBER_REGEX = /\d/;

var myAtoi = function(str) {
  let result = '';
  let startParsing = false;
  let sign = null;

  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];

    // skip starting spaces
    if (currentLetter === ' ' && !startParsing) {
      continue;
    }

    if (currentLetter === '-' && sign === null) {
      sign = -1;
      startParsing = true;
      continue;
    }
    if (currentLetter === '+' && sign === null) {
      sign = 1;
      startParsing = true;
      continue;
    }

    if (NUMBER_REGEX.test(currentLetter)) {
      if (sign === null) {
        sign = 1;
      }
      result = `${result}${currentLetter}`
      startParsing = true;
    } else {
      break;
    }
  }

  if (result.length === 0) {
    return 0;
  }

  result = +result * sign;
  return Math.min(Math.max(MIN_NUMBER, result), MAX_NUMBER);
};

let input = `4193 with words`;
let result = myAtoi(input);
console.assert(result === 4193);
input = `    -42`;
result = myAtoi(input);
console.assert(result === -42);
input = `words and 987`;
result = myAtoi(input);
console.assert(result === 0);
input = `-91283472332`;
result = myAtoi(input);
console.assert(result === -2147483648);
input = `+1`;
result = myAtoi(input);
console.assert(result === 1);
input = "   +0 123";
result = myAtoi(input);
console.assert(result === 0);
input =  "-   234";
result = myAtoi(input);
console.assert(result === 0);