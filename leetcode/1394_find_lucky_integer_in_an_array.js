// Time: O(n)
// Space: O(n)
function findLucky(arr) {
  const frequency = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (frequency[current] === undefined) frequency[current] = 0;

    frequency[current]++;
  }

  let result = -1;
  for (let i = 0; i < frequency.length; i++) {
    if (frequency[i] === i) {
      result = Math.max(result, i);
    }
  }

  return result;
}

let input = [2,2,3,4];
let output = findLucky(input);
console.log(output);

input = [1,2,2,3,3,3];
output = findLucky(input);
console.log(output);

input = [2,2,2,3,3];
output = findLucky(input);
console.log(output);
