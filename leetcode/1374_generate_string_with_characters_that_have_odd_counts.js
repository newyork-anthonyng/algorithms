function generateTheString(n) {
  let result = [];

  // if even
  if (n % 2 === 0) {
    for (let i = 0; i < (n - 1); i++) {
      result.push('a');
    }

    result.push('b');
  } else {
    // if odd
    for (let i = 0; i < n; i++) {
      result.push('a');
    }
  }

  return result.join('');
}

let input = 4;
let output = generateTheString(input);
console.log(output);