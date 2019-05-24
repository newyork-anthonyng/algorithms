function isPalindrome(string) {
  if (string.length <= 1) {
    return true;
  }

  if (string[0] !== string[string.length - 1]) {
    return false;
  }

  return isPalindrome(string.slice(1, -1));
}

console.log("racecar", isPalindrome("racecar"));
console.log("dog", isPalindrome("dog"));
