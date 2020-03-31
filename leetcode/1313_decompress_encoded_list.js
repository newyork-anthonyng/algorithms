function decompressRLElist(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i+=2) {
    let currentFrequency = nums[i];
    const currentValue = nums[i + 1];

    while (currentFrequency--) {
      result.push(currentValue);
    }
  }

  return result;
}

let input = [1, 1, 2, 3];
let output = decompressRLElist(input);
console.log(output);

input = [1, 2, 3, 4];
output = decompressRLElist(input);
console.log(output);