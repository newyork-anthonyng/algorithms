// o(N^3)
function maximumSubarraySum(arr) {
  let best = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;

      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }

      best = Math.max(best, sum);
    }
  }
  return best;
}

let input = [-1, 2, 4, -3, 5, 2, -5, 2];
let output = maximumSubarraySum(input);
console.assert(output === 10);

// o(N^2)
function alternative1(arr) {
  let best = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      best = Math.max(sum, best);
    }
  }

  return best;
}

input = [-1, 2, 4, -3, 5, 2, -5, 2];
output = alternative1(input);
console.assert(output === 10);

// o(N)
function alternative2(arr) {
  let best = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = Math.max(arr[i], sum + arr[i]);
    best = Math.max(best, sum);
  }

  return best;
}

input = [-1, 2, 4, -3, 5, 2, -5, 2];
output = alternative2(input);
console.assert(output === 10);