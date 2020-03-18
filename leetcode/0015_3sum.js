function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const results = [];

  for (let i = 0; i < nums.length; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) {
      continue; // skip duplicates
    }

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      if ((nums[i] + nums[j] + nums[k]) === 0) {
        results.push([nums[i], nums[j], nums[k]]);
        j++;

        while (j < k && nums[j] === nums[j - 1]) {
          // skip duplicates
          j++;
        }
      } else if ((nums[i] + nums[j] + nums[k]) < 0) {
        j++;
      } else {
        k--;
      }
    }
  }

  return results;
}

let input = [-1, 0, 1, 2, -1, -4];
let result = threeSum(input);
console.log(result);