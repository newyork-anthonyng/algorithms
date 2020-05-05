function rob(nums) {
  const length = nums.length;

  if (length === 0) return 0;
  if (length === 1) return nums[0];

  const dp = [];
  dp.push(nums[0]);
  dp.push(Math.max(nums[0], nums[1]));

  for (let i = 2; i < length; i++) {
    dp.push(Math.max(dp[i - 1], nums[i] + dp[i - 2]));
  }

  return Math.max(dp[length-1], dp[length-2]);
}

let input = [2,1,1,2]
let output = rob(input);
console.log(output);
