function minPathSum(grid) {
  const height = grid.length;
  const width = grid[0].length;
  const dp = [];

  for (let row = 0; row < height; row++) {
    dp[row] = [];

    for (let col = 0; col < width; col++) {
      if (row === 0 && col === 0) {
        dp[row][col] = grid[row][col];
      } else {
        dp[row][col] = grid[row][col] + Math.min(
          row === 0 ? Infinity : dp[row - 1][col],
          col === 0 ? Infinity : dp[row][col - 1]
        );
      }

    }
  }

  return dp[height - 1][width - 1];
}

let input = [
  [1,3,1],
  [1,5,1],
  [4,2,1]
];
let output = minPathSum(input);
console.log(output);

// dp
/*
[
  [1, 4, 5],
  [2, 7, 6],
  [6, 8, 7]
]
*/