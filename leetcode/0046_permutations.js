function permute(nums, sets = [], answers = []) {
  if (nums.length === 0) {
    return answers.push(sets.slice());
  }

  for (let i = 0; i < nums.length; i++) {
    const newNums = nums.filter((_, index) => index !== i);
    sets.push(newNums[i]);
    permute(newNums, sets, answers);
    sets.pop();
  }

  return answers;
}
