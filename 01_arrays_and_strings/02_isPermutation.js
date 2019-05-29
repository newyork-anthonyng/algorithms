/*
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * Questions to ask
 * Is "G" equal to "g"? (case sensitive)
 * Is "god  " equal to "  dog"? (whitespace sensitive)
 *
 * */
function isPermutation(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  // we can use an array instead of a hash; array[0] holds the count of "a", array[1] holds the count of "b"
  // this saves us from the awkward Object.keys call at the end of the function
  const hash = string1.split("").reduce((acc, currentValue) => {
    if (acc[currentValue] === undefined) {
      acc[currentValue] = 1;
    } else {
      acc[currentValue]++;
    }
    return acc;
  }, {});

  for (let i = 0; i < string2.length; i++) {
    // check if all letters are present in string1
    const currentValue = string2[i];

    if (hash[currentValue] === 0 || hash[currentValue] === undefined) {
      return false;
    }
    hash[currentValue]--;
  }

  // check for extra letters in string1 that are not present in string2
  // Note: This code is not needed. If there were any leftover strings (positive counts), that means there were negative counts elsewhere.
  const string1Letters = Object.keys(hash);
  for (let i = 0; i < string1Letters.length; i++) {
    const currentValue = string1Letters[i];
    if (hash[currentValue] > 0) {
      return false;
    }
  }

  return true;
}

console.assert(isPermutation("abcdef", "fedcba") === true, "abcdef is a permutation of fedcba");
console.assert(isPermutation("abcdefg", "fedcba") === false, "abcdefg is a permutation of fedcba");
