// Time: O(n)
// Space: O(1)
function peakIndexInMountainArray(A) {
  for (let i = 1; i < A.length; i++) {
    if (A[i] < A[i - 1]) {
      return i - 1;
    }
  }
}

let input = [0, 1, 0];
let output = peakIndexInMountainArray(input);
console.log(output);

input = [0,2,1,0];
output = peakIndexInMountainArray(input);
console.log(output);