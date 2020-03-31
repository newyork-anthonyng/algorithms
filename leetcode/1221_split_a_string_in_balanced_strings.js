function balancedStringSplit(s) {
  let count = 0;
  let current = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') {
      current++;
    } else {
      current--;
    }

    if (current === 0) {
      count++;
    }
  }

  return count;
}

let input = 'RLLLLRRRLR';
let output = balancedStringSplit(input);
console.assert(output === 3);

input = 'RLRRLLRLRL';
output = balancedStringSplit(input);
console.assert(output === 4);
