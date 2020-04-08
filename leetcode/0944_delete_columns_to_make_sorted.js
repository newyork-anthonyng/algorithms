// Size: O(length of word)
// Time: O(length of word * number of words)
function minDeletionSize(A) {
  let counter = 0;
  const applesauce = [];

  for (let i = 0; i < A.length; i++) {
    const currentLetter = A[i];

    for (let j = 0; j < currentLetter.length; j++) {
      const currentCharCode = currentLetter[j].charCodeAt(0);

      if (applesauce[j] === undefined) {
        applesauce[j] = currentCharCode;
      } else if (applesauce[j] === -1) {
        continue;
      } else {
        if (currentCharCode < applesauce[j]) {
          counter++;
          applesauce[j] = -1;
        } else {
          applesauce[j] = currentCharCode;
        }
      }
    }
  }

  return counter;
}

let input = ["cba","daf","ghi"];
let output = minDeletionSize(input);
console.log(output);

input = ['a', 'b'];
output = minDeletionSize(input);
console.log(output);

input = ["zyx","wvu","tsr"];
output = minDeletionSize(input);
console.log(output);