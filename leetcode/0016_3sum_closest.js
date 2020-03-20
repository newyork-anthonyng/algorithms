function threeSumClosest(nums, target = 1) {
  let result = Infinity;
  let resultArray = null;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      let newDifference = Math.abs(target - sum);

      if (newDifference < Math.abs(target - result)) {
        result = sum;
        resultArray = [nums[i], nums[left], nums[right]];
        break;
      }

      if (sum < target) {
        while (left < right && nums[left] === nums[left + 1]) left++;
        left++;
      } else if (sum > target) {
        while (left < right && nums[right] === nums[right - 1]) right--;
        right--;
      } else {
        break;
      }
    }
  }

  return result;
}

let input = [-1, 2, 1, -4];
let result = threeSumClosest(input, 1);
console.log(result, 2);