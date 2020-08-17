let input = [1, 2, 0];
console.assert(firstMissingPositive(input) === 3);

input = [3, 4, -1, 1];
console.assert(firstMissingPositive(input) === 2);

input = [7, 8, 9, 11, 12];
console.assert(firstMissingPositive(input) === 1);

input = [];
console.assert(firstMissingPositive(input) === 1);

function firstMissingPositive(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0) continue;

    result[nums[i] - 1] = true;
  }

  for (let i = 0; i <= result.length; i++) {
    if (!result[i]) {
      return i + 1;
    }
  }
}

/*

[5, 3, 4, 2, 1]

i = 0;
nums[i] - 1 === 4
[1, 3, 4, 2, 5]

i = 0;
nums[i] - 1 === 0

i = 1;
nums[i] - 1 === 2
[1, 4, 3, 2, 5]

i = 1;
nums[i] - 1 === 3
[1, 2, 3, 4, 5]

i = 1;
nums[i] - 1 === 1

i = 2;
nums[i] - 1 === 2

i = 3;
*/
function alternative(nums) {
  let i = 0;

  while (i < nums.length) {
    let actualPosition = nums[i] - 1;

    const isInWrongPosition = actualPosition !== i;
    const canSwap = !isNaN(nums[actualPosition]);
    const isNotDuplicate = nums[i] != nums[actualPosition];

    if (
      isInWrongPosition &&
      canSwap &&
      isNotDuplicate
    ) {
      [nums[i], nums[actualPosition]] = [nums[actualPosition], nums[i]];
    } else {
      i++;
    }
  }

  i = 0;
  while (nums[i] === i + 1) i++;

  return i + 1;
}
