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