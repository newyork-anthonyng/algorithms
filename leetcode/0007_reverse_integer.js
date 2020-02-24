const MAXIMUM = Math.pow(2, 31) - 1;
const MINIMUM = Math.pow(2, 31) * -1;

function reverse(x) {
  const isNegative = x < 0;
  const stringifiedNumber = `${Math.abs(x)}`;
  const reversed = stringifiedNumber.split('').reverse().join('');

  let answer = +reversed;
  answer = isNegative ? answer * -1 : answer;

  if (answer < MINIMUM) {
    return 0;
  }

  if (answer > MAXIMUM) {
    return 0;
  }

  return answer;
}

let result = reverse(123);
console.log(result, 321);
result = reverse(-123);
console.log(result, -321);
result = reverse(120);
console.log(result, 21);

result = reverse(1534236469);
console.log(result, 0);