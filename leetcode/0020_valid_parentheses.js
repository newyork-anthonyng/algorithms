function isValid(s) {
  const result = [];

  for (let i = 0; i < s.length; i++) {
    const currentLetter = s[i];

    if (
      currentLetter.match(/(\(|\[|\{)/)
    ) {
      result.push(currentLetter);
    } else {
      const beginningParenthesis = getMatchingBeginningParenthesis(currentLetter);

      const abc = result.pop();
      if (abc !== beginningParenthesis) {
        return false;
      }
    }
  }

  return result.length === 0;
}

function getMatchingBeginningParenthesis(s) {
  if (s === ')') {
    return '(';
  } else if (s === ']') {
    return '[';
  } else if (s === '}') {
    return '{';
  }
}

let input = '()';
let result = isValid(input);
console.assert(result === true);

input = '()[]{}';
result = isValid(input);
console.assert(result === true);

input = '(]';
result = isValid(input);
console.assert(result === false);

input = '([)]';
result = isValid(input);
console.assert(result === false);

input = '{[]}';
result = isValid(input);
console.assert(result === true);