// https://leetcode.com/problems/unique-morse-code-words/

const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

function uniqueMorseRepresentations(words) {
  // create morse code for each word
  // add it to the hash
  const hash = {};
  words.forEach(word => {
    const morseRepresentation = getMorseCode(word);
    hash[morseRepresentation] = true;
  });

  // see how many unique hash keys there are
  return Object.keys(hash).length;
}

function getMorseCode(word) {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    const charCode = word[i].charCodeAt(0);
    result += morseCode[charCode - 97];
  }

  return result;
}

let result = uniqueMorseRepresentations([
  "gin",
  "zen",
  "gig",
  "msg"
]);
console.assert(result, 2);
