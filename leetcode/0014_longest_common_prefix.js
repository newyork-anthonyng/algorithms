// https://leetcode.com/problems/longest-common-prefix/

function longestCommonPrefix(strs) {
  let commonPrefix = strs[0];
  if (commonPrefix === undefined) {
    commonPrefix = [''];
  } else {
    commonPrefix = commonPrefix.split('');
  }

  for (let i = 1; i < strs.length; i++) {
    const currentWord = strs[i];

    commonPrefix = commonPrefix.slice(0, currentWord.length);

    for (let j = 0; j < currentWord.length; j++) {
      const currentLetter = currentWord[j];

      if (commonPrefix[j] === undefined) {
        break;
      }

      if (commonPrefix[j] !== currentLetter) {
        commonPrefix = commonPrefix.slice(0, j);
        break;
      }
    }
  }

  return commonPrefix.join('');
}

console.assert(longestCommonPrefix(['flower', 'flow', 'flight']) === 'fl');
console.assert(longestCommonPrefix(['dog', 'racecar', 'car']) === '');
console.assert(longestCommonPrefix([]) === '');
console.assert(longestCommonPrefix(['aa', 'a']) === 'a');