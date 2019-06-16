// https://leetcode.com/problems/self-dividing-numbers/

function selfDividingNumbers(left, right) {
  let result = [];

  for (let i = left; i <= right; i++) {
    isNumberSelfDividing(i) && result.push(i);
  }

  return result;
}

function isNumberSelfDividing(number) {
  const string = `${number}`;

  // is each number in it divisible
  const stringArray = string.split("");
  for (let i = 0; i < stringArray.length; i++) {
    const current = +stringArray[i];

    if (current === 0) {
      return false;
    }

    if ((number % current) !== 0) {
      return false;
    }
  }

  return true;
}

let result = selfDividingNumbers(1, 22);
console.log(result);
