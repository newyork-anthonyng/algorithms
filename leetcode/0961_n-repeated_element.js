const assert = require("assert");
// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
function repeatedNTimes(array) {
  const hash = {};

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (hash[current] === undefined) {
      hash[current] = true;
    } else {
      return current;
    }
  }
}

let array = [1, 2, 3, 3];
let result = repeatedNTimes(array);
assert(result === 3);

array = [2, 1, 2, 5, 3, 2];
result = repeatedNTimes(array);
assert(result === 2);

array = [5, 1, 5, 2, 5, 3, 5, 4];
result = repeatedNTimes(array);
assert(result === 5);
