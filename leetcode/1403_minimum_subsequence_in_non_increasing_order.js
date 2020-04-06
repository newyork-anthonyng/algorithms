function minSubsequence(nums) {
  nums.sort((a, b) => a - b);

  const sum = nums.reduce((acc, current) => acc + current);
  let target = Math.floor(sum / 2);

  let result = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    result.push(nums[i]);
    target -= nums[i];

    if (target < 0) {
      break;
    }
  }

  return result;
}

let input = [4, 3, 10, 9, 8];
let output = minSubsequence(input);
console.log(output);

input = [4,4,7,6,7];
output = minSubsequence(input);
console.log(output);