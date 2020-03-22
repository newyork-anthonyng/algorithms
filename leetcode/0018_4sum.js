function fourSum(nums, target) {
  if (nums.length < 4) return [];

  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    const currentNumber = nums[i];
    const currentTarget = target - currentNumber;

    const applesauce = _threeSum(nums, i + 1, currentTarget);

    for (let i = 0; i < applesauce.length; i++) {
      result.push([currentNumber, ...applesauce[i]]);
    }
  }

  return result;
}

function _threeSum(nums, index, target) {
  let result = [];

  for (let i = index; i < nums.length; i++) {
    if (i > index && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right++;

        left++;
        right--;
      } else if (sum < target) {
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        left++;
      } else if (sum > target) {
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        right--;
      }
    }
  }

  return result;
}

// let input = [1, 0, -1, 0, -2, 2];
let input = [0,0,0,0];
let target = 0;

// console.log(threeSum(input, target));
let result = fourSum(input, target);
// let result = threeSum(input, 0);
console.log(result);