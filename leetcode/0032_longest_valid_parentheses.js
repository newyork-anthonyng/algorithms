function longestValidParentheses(string) {
  let result = 0;
  let dp = [];

  for(let i = 0; i < string.length; i++) {
    const letter = string[i];
    dp[i] = 0;
    if(letter === ")") {
      if (string[i - 1] === "(") {
        dp[i] = 2;

        if (dp[i - 2] && dp[i - 2] > 0) {
          dp[i] = dp[i] + dp[i - 2];
        }
        result = Math.max(dp[i], result);
      }

      if (string[i - 1] === ")") {
        const index = i - dp[i - 1] - 1;
        const isWrappingParentheses = string[index] === "(";

        if (isWrappingParentheses) {
          dp[i] = 2 + dp[i - 1];
          if (dp[index - 1] > 0) {
            dp[i] += dp[index - 1];
          }
        }

        result = Math.max(dp[i], result)
      }
    }
  }

  return result;
}

let input = "()";
console.assert(longestValidParentheses(input) === 2, 'first');

input = "()()";
console.assert(longestValidParentheses(input) === 4, 'second')

input = "(())";
console.assert(longestValidParentheses(input) === 4, 'third')

input = "(()())";
console.assert(longestValidParentheses(input) === 6, 'fourth')

input = "))(())";
console.assert(longestValidParentheses(input) === 4, 'fifth');

input = ")()())";
console.assert(longestValidParentheses(input) === 4, 'sixth')

input = "()(())"
console.assert(longestValidParentheses(input) === 6, 'seventh')
