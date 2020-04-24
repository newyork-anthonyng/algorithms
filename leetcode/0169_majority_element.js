function majorityElement(nums) {
  const target = Math.floor(nums.length / 2);

  const frequency = [];
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    if (frequency[currentNumber] === undefined) {
      frequency[currentNumber] = 0;
    }

    frequency[currentNumber]++;
    if (frequency[currentNumber] > target) {
      return currentNumber;
    }
  }
}

let input = [3,2,3];
let output = majorityElement(input);
console.log(output);

input = [2,2,1,1,1,2,2];
output = majorityElement(input);
console.log(output);

// boyer-moore voting algorithm
function alternate(nums) {
  let count = 0;
  let candidate = null;

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (count === 0) {
      candidate = current;
    }

    count += (candidate === current ? 1 : -1)
  }

  return candidate;
}

input = [3,2,3];
output = alternate(input);
console.log(output);

input = [2,2,1,1,1,2,2];
output = alternate(input);
console.log(output);