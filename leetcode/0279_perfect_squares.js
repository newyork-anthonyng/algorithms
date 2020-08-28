function numSquares(n) {
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = Infinity;

    for (let j = 1; (j * j) <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - (j * j)] + 1);
    }
  }

  return dp[n];
}

console.assert(
  numSquares(12) === 3,
  'first'
);
