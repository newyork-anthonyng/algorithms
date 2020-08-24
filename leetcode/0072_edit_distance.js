let inputs = ['horse', 'ros'];
console.assert(
  minDistance(...inputs) === 3,
  'first'
);
inputs = ['intention', 'execution'];
console.assert(
  minDistance(...inputs) === 5,
  'second'
);
inputs = ['', ''];
console.assert(
  minDistance(...inputs) === 0,
  'third'
);

inputs = ['', 'a'];
console.assert(
  minDistance(...inputs) === 1,
  'fourth'
);

function minDistance(word1, word2) {
  const dp = [[0]];

  // fill out first column
  for (let i = 0; i < word1.length + 1; i++) {
    dp[i] = [i];
  }

  // fill out first row
  for (let i = 0; i < word2.length + 1; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i < word1.length + 1; i++) {
    for (let j = 1; j < word2.length + 1; j++) {
      const leftLetter = word1[i - 1];
      const rightLetter = word2[j - 1];

      if (leftLetter === rightLetter) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        const replacement = dp[i - 1][j - 1];
        const insertion = dp[i - 1][j];
        const deletion = dp[i][j - 1];
        dp[i][j] = Math.min(replacement, insertion, deletion) + 1;
      }
    }
  }

  return dp[dp.length - 1][dp[0].length - 1];
}
