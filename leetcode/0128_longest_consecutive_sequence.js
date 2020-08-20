let input = [100, 4, 200, 1, 3, 2];
console.assert(
  longestConsecutive(input) === 4,
  'first'
);
input = [1, 2, 3, 100, 105, 104, 103, 102, 10, 101];
console.assert(
  longestConsecutive(input) === 6,
  'second'
);

function longestConsecutive(nums) {
  let result = 0;
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = true;
  }

  for (const key in hash) {
    const isNotStartOfConsecutive = hash[key - 1] === true;
    if (isNotStartOfConsecutive) {
      continue;
    }

    let currentNumber = key;
    let currentMax = 0;

    while (hash[currentNumber] === true) {
      currentNumber++;
      currentMax++;
    }

    result = Math.max(result, currentMax);
  }

  return result;
}
