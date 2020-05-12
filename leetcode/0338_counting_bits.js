function countingBits(num) {
  const result = [];

  for (let i = 0; i <= num; i++) {
    const binary = i.toString(2);
    result.push(countOnes(binary));
  }

  return result;
}

function countOnes(string) {
  let count = 0;

  string.split('').forEach(num => {
    if (num === '1') count++;
  })

  return count;
}
