// Time: O(n), Space: O(n)
function maximum69Number(num) {
  let string = `${num}`.split('');

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '6') {
      string[i] = '9';
      break;
    }
  }

  return +(string.join(''));
}

// use Math to solve this.
function alternative(num) {
  let i = 0;
  let digit = 0;
  let n = Math.floor(num);

  while (n >= 1) {
    if (n % 10 == 6) {
      digit = i + 1;
    }

    n = Math.floor(n / Math.floor(10));
    i++;
  }

  return digit === 0 ?
    num :
    num + 3 * Math.pow(10, digit - 1);
}

let input = 6699;
let output = alternative(input);
console.log(output);