// https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesCount = 0;
  let orangesCount = 0;

  for (let i = 0; i < apples.length; i++) {
    if (isWithinRange(apples[i] + a, s, t)) {
      applesCount++;
    }
  }

  for (let i = 0; i < oranges.length; i++) {
    if (isWithinRange(oranges[i] + b, s, t)) {
      orangesCount++;
    }
  }

  console.log(applesCount);
  console.log(orangesCount);
}

function isWithinRange(num, min, max) {
  return num >= min && num <= max;
}

// let output = countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
// console.log(output);

output = countApplesAndOranges(2, 3, 1, 5, [2], [-2])
console.log(output);