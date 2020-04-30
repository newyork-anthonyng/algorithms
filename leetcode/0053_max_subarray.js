function maxSubArray(array) {
  let result = -Infinity;

  const dp = [array[0]];
  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    dp[i] = Math.max(current, dp[i - 1] + current);
    result = Math.max(result, dp[i]);
  }

  return result;
}

let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let output = maxSubArray(input);

console.log(output);
