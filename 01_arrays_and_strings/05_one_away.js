/**
 * Time complexity: O(n)
 * Space complexity: O(1)
*/
function oneAway(string1, string2) {
  let startIndex;

  // iterate from the start of the string
  for (startIndex = 0; startIndex < string1.length; startIndex++) {
    if (string1[startIndex] !== string2[startIndex]) {
      break;
    }
  }

  let endIndex;

  // iterate from the end of the string
  for (let i = 0; i < string1.length; i++) {
    const string1LastLetter = string1[string1.length - 1 - i];
    const string2LastLetter = string2[string2.length - 1 - i];
    if (string1LastLetter !== string2LastLetter) {
      endIndex = string1.length - i;
      break;
    }
  }

  return Math.abs(startIndex - endIndex) <= 1;
}
/**
 * Another way to think about this is to address all three use cases
 * 1. When there is only 1 letter difference
 * 2. When there is one letter added
 * 3. When there is one letter removed
 * 2 & 3 are inverses of each other
*/

console.assert(
  oneAway("pale", "ple") === true,
  "pale and ple"
);
console.assert(
  oneAway("pales", "pale") === true,
  "pales and pale"
);
console.assert(
  oneAway("pale", "bale") === true,
  "pale and bale"
);
console.assert(
  oneAway("pale", "bake") === false,
  "pale and bake"
);
