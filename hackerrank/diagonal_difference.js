// https://www.hackerrank.com/challenges/diagonal-difference/problem

// the row and col index are the same
function diagonalDifference(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += (arr[i][i] - arr[i][arr.length - 1 - i]);
  }

  return Math.abs(result);
}