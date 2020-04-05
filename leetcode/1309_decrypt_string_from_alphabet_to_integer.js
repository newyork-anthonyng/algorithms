// Time: O(n)
// Space: O(n)
function freqAlphabets(s) {
  let result = '';

  for (let i = s.length - 1; i >= 0; i--) {
    let current = s[i];

    if (current === '#') {
      current = `${s[i - 2]}${s[i - 1]}`;
      i -= 2;
    }

    result = String.fromCharCode(+current + 96) + result;
  }

  return result;
}

let input = '10#11#12';
let output = freqAlphabets(input);
console.log(output);

input = '1326#';
output = freqAlphabets(input);
console.log(output);