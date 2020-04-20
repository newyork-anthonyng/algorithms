// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(ar) {
  const frequency = [];

  for (let i = 0; i < ar.length; i++) {
    const current = ar[i];
    if (frequency[current] === undefined) frequency[current] = 0;

    frequency[current]++;
  }

  return frequency[frequency.length - 1];
}