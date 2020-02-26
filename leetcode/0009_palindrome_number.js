function isPalindrome(x) {
  const stringifiedNumber = `${x}`;

  const reversedNumber = stringifiedNumber.split('').reverse().join('');

  return reversedNumber === stringifiedNumber;
}

console.assert(isPalindrome(121) === true, '121');
console.assert(isPalindrome(-121) === false, '-121');
console.assert(isPalindrome(10) === false, '10');

function isPalindrome2(x) {
  if (x < 0) {
    return false;
  }

  let tmp = x;
  let invx = 0;
  while (tmp > 0) {
    invx = invx * 10 + tmp % 10;
    tmp = Math.floor(tmp / 10);
  }

  return invx === x;
}

console.assert(isPalindrome2(121) === true, '121');
console.assert(isPalindrome2(-121) === false, '-121');
console.assert(isPalindrome2(10) === false, '10');

/*
x === 121
tmp === 121
invx === 0

invx = (0 * 10) + (121 % 10) => 0 + (1) => 1
invx === 1
tmp = Math.floor(121 / 10) => 12
tmp === 12

invx = (1 * 10) + (12 % 10) => 10 + 2 => 12
invx === 12
tmp = Math.floor(12 / 10) => 1
tmp === 1

invx = (12 * 10) + (1 % 10) => 120 + 1 => 121
invx === 121
tmp = Math.floor(1 / 10) => 0
tmp === 0
*/