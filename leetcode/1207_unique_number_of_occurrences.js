// Space: O(n)
// Time: O(n)
function uniqueOccurrences(arr) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    if (obj[currentNumber] === undefined) {
      obj[currentNumber] = 0;
    }

    obj[currentNumber]++;
  }

  const frequencyCount = Object.keys(obj);
  const result = [];

  for (let i = 0; i < frequencyCount.length; i++) {
    const currentCount = obj[frequencyCount[i]];
    if (result[currentCount] !== undefined) {
      return false;
    } else {
      result[currentCount] = true;
    }
  }

  return true;
}

let input = [1,2,2,1,1,3];
let output = uniqueOccurrences(input);
console.log(output);

input = [1,2];
output = uniqueOccurrences(input);
console.log(output);