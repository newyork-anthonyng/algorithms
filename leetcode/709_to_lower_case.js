// https://leetcode.com/problems/to-lower-case/submissions/
const assert = require("assert");

function toLowerCase(str) {
  const length = str.length;
  let result = "";

  for (let i = 0; i < length; i++) {
    const currentLetter = str[i];
    const isLetterUppercase = currentLetter < "a" && str[i] >= "A";
    if (isLetterUppercase) {
      result += String.fromCharCode(
        currentLetter.charCodeAt(0) + 32
      );
    } else {
      result += str[i];
    }
  }

  return result;
}

const result = toLowerCase("Hello");
assert(result === "hello");
