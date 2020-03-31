function createTargetArray(nums, index) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (index[i] >= index[j]) {
        index[i]++;
      }

      result[index[i]] = nums[i];
    }
  }

  return result;
}