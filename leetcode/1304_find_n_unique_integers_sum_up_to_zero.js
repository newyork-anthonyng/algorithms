function sumZero(n) {
  const result = [];

  let index = Math.floor(n / 2);

  while (index !== 0) {
    result.push(index);
    result.push(-index);

    index--;
  }

  if (n % 2 !== 0) {
    result.push(0);
  }

  return result;
}

let input = 5;
let output = sumZero(input);
console.log(output);