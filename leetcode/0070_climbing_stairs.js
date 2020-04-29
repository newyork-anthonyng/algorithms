// https://leetcode.com/problems/climbing-stairs/solution/

function climbStairs(n) {
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(1, climbStairs(1));
console.log(2, climbStairs(2));
console.log(3, climbStairs(3));
console.log(5, climbStairs(4));
console.log(8, climbStairs(5));
console.log(13, climbStairs(6));
console.log(21, climbStairs(7));
