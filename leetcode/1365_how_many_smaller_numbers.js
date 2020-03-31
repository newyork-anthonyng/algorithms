function smallerNumbersThanCurrent(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    let count = 0;

    for (let j = 0; j < nums.length; j++) {
      if (j === i) continue;

      if (nums[j] < currentNumber) {
        count++;
      }
    }

    result.push(count);
  }

  return result;
}

let input = [8, 1, 2, 2, 3];
let output = smallerNumbersThanCurrent(input);
console.log(output);

function anotherAnswer(nums) {
  const sortedArray = nums.slice().sort((a, b) => a - b);
  // the index of the element shows how many elements are less than it.

  return nums.map(ele => sortedArray.indexOf(ele));
}