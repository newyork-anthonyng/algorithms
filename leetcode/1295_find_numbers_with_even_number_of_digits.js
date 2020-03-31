function findNumbers(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (`${nums[i]}`.length % 2 === 0) {
      result++;
    }
  }

  return result;
}



let input = [12, 345, 2, 6, 7896];
let output = findNumbers(input);
console.log(output);

function alternativeSolution(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (countDigits(nums[i]) % 2 === 0) {
      result++;
    }
  }

  return result;
}

function countDigits(n) {
  if (n < 10) {
    return 1;
  } else {
    return 1 + countDigits(n / 10);
  }
}