function diStringMatch(S) {
  let result = [];

  let inc = 0;
  let end = S.length;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === 'I') {
      result.push(inc);
      inc++;
    } else {
      result.push(end);
      end--;
    }
  }

  result.push(inc);
  return result;
}

let input = 'IDID';
let output = diStringMatch(input);
console.log(output);
