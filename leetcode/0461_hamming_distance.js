// https://leetcode.com/problems/hamming-distance/

function hammingDistance(x, y) {
  let firstBinary = x.toString(2);
  let secondBinary = y.toString(2);

  const firstLength = firstBinary.length;
  const secondLength = secondBinary.length;

  if (firstLength > secondLength) {
    secondBinary = secondBinary.padStart(firstLength, "0");
  } else if (secondLength > firstLength) {
    firstBinary = firstBinary.padStart(secondLength, "0");
  }

  let result = 0;
  for (let i = 0; i < firstBinary.length; i++) {
    if (firstBinary[i] !== secondBinary[i]) {
      result++;
    }
  }

  return result;
}

let result = hammingDistance(1, 4);
console.log(result, 2);
