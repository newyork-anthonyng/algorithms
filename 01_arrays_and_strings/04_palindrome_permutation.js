/**
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 */
function isPalindromePermutation(string) {
  // create hash that contains count of all letters
  const hash = string.split("").reduce((acc, currentValue) => {
    if (currentValue.trim() === "") {
      return acc;
    }
    const lowercaseValue = currentValue.toLowerCase();
    if (acc[lowercaseValue] === undefined) {
      acc[lowercaseValue] = 1;
    } else {
      acc[lowercaseValue]++;
    }

    return acc;
  }, {});

  // 1. if a word has only an even count of numbers, it can be constructed into a palindrome
  // 2. if a word only has one count of odd numbers, it can be constructed into a palindrome
  // 3. if a word has more than one count of odd numbers, it cannot be constructed into a palindrome
  const keys = Object.keys(hash);
  let amountOfOddLetters = 0;
  for (let i = 0; i < keys.length; i++) {
    const currentLetter = keys[i];
    if (isOdd(hash[currentLetter])) {
      amountOfOddLetters++;
    }
  }

  return amountOfOddLetters === 0 || amountOfOddLetters === 1;
}

function isOdd(number) {
  return number % 2 !== 0;
}

let word = "Tact coa";
console.assert(isPalindromePermutation(word) === true, "'tact coa' is a palindrome permutation");

word = "yogurt";
console.assert(isPalindromePermutation(word) === false, "'yogurt' is not a palindrome permutation");
