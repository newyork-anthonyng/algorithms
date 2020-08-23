let input = [2, 3, 1, 1, 4];
console.assert(
  jump(input) === 2,
  'first'
);

function jump(nums) {
  if (nums.length < 2) {
    return 0;
  }

  let currentSteps = 1;
  let maxDestination = nums[0];
  let maxDestinationWithCurrentSteps = maxDestination;

  for (let i = 0; i < nums.length; i++) {
    const currentJump = nums[i];
    const doesNeedExtraStep = maxDestinationWithCurrentSteps < i;
    if (doesNeedExtraStep) {
      currentSteps++;
      maxDestinationWithCurrentSteps = maxDestination;
    }

    maxDestination = Math.max(maxDestination, i + currentJump);
  }

  return currentSteps;
}

function dp(nums) {
  const dp = [0];

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const currentJump = nums[j];
      const canReachDestination = (currentJump + j) >= i;
      if (canReachDestination) {
        dp[i] = Math.min(dp[j] + 1, dp[i] || Infinity);
      }
    }
  }
}

dp([2, 3, 1, 1, 4]);
