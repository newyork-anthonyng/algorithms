// https://leetcode.com/problems/remove-outermost-parentheses/
const assert = require("assert");

function removeOuterParentheses(S) {
  let result = "";
  let counter = 0;
  for (let i = 0; i < S.length; i++) {
    const currentString = S[i];
    if (currentString === "(") {
      if (counter > 0) {
        result += "(";
      }
      counter++;
    } else if (currentString === ")") {
      if (counter > 1) {
        result += ")";
      }
      counter--;
    }
  }

  return result;
}

assert(
  removeOuterParentheses("(()())(())(()(()))") === "()()()()(())"
);
