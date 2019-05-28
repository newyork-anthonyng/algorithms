function isPermutation(string1, string2) {
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
