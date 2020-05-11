function findUnsortedSubarray(nums) {
  const sortedArray = nums.slice().sort((a, b) => a - b);
    
  let startingIndex = false;
  for (let i = 0; i < nums.length; i++) {
      if (sortedArray[i] !== nums[i]) {
          startingIndex = i;
          break;
      }
  }
  
  let endingIndex = false;
  for (let i = nums.length - 1; i >= 0; i--) {
      if (sortedArray[i] !== nums[i]) {
          endingIndex = i;
          break;
      }
  }

  if (endingIndex === startingIndex) {
    return 0;
  }

  return endingIndex - startingIndex + 1;
}

let input = [2, 6, 4, 8, 10, 9, 15];
let output = findUnsortedSubarray(input);
console.log(output);
