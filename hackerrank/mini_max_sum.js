// https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  let minNumber = Infinity;
  let maxNumber = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    minNumber = Math.min(minNumber, arr[i]);
    maxNumber = Math.max(maxNumber, arr[i]);
    sum = sum + arr[i];
  }

  console.log(sum - maxNumber, sum - minNumber);
}