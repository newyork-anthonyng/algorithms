function sortArrayByParityII(A) {
  const result = [];

  let evenCounter = 0;
  let oddCounter = 1;
  for (let i = 0; i < A.length; i++) {
    const current = A[i];

    if (current % 2 === 0) {
      result[evenCounter] = current;
      evenCounter += 2;
    } else {
      result[oddCounter] = current;
      oddCounter += 2;
    }
  }

  return result;
}

let input = [4,2,5,7];
let output = sortArrayByParityII(input);
console.log(output);

// Time: O(n)
// Space: O(1)
function alternative(A) {
  const n = A.length;

  let i = 0;
  let j = 1;
  let k = 0;

  while (k < n) {
    // current index is odd, but an even number occupies it
    if (k % 2 != 0 && A[k] % 2 === 0) {
      swap(A, i, k);
      i += 2;
    } else if (k % 2 === 0 && A[k] % 2 !== 0) {
      // current index is even, but an odd number occupies it
      swap(A, j, k);
      j += 2;
    } else {
      k++;
    }
  }

  return A;
}

function swap(array, first, second) {
  const old = array[first];
  array[first] = array[second];
  array[second] = old;
}

output = alternative(input);
console.log(output);