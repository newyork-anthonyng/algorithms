// Time: O(n), Space: O(n)
// function replaceElements(arr) {
//   let result = [];

//   let currentLargest = arr[arr.length - 1];
//   result[arr.length - 1] = -1;
//   for (let i = arr.length - 1; i >= 1; i--) {
//     const current = arr[i];
//     currentLargest = Math.max(current, currentLargest);
//     result[i - 1] = currentLargest;
//     console.log(result);
//   }

//   return result;
// }

// alternative solution that doesn't use currentLargest variable to track maximum
function replaceElements(arr) {
  let result = [];
  result[arr.length - 1] = -1;

  for (let i = arr.length - 1; i >= 1; i--) {
    result[i - 1] = Math.max(arr[i], result[i]);
  }

  return result;
}

let input = [17, 18, 5, 4, 6, 1];
let output = replaceElements(input);
console.log(output);
