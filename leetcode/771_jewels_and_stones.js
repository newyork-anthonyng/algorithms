// https://leetcode.com/problems/jewels-and-stones/
const assert = require("assert");

function numJewelsInStones(J, S) {
  const hash = J.split("").reduce((accumulatedValue, currentValue) => {
    accumulatedValue[currentValue] = true;
    return accumulatedValue;
  }, {});

  let result = 0;
  for (let i = 0; i < S.length; i++) {
    const currentString = S[i];
    if (hash[currentString]) {
      result++;
    }
  }
  return result;
}

const J = "aA";
const S = "aAAbbbb";

assert(numJewelsInStones(J, S) === 3);
