function countCharacters(words, chars) {
  const frequency = {};

  for (let i = 0; i < chars.length; i++) {
    if (frequency[chars[i]] === undefined) {
      frequency[chars[i]] = 0;
    }

    frequency[chars[i]]++;
  }

  let result = 0;
  for (let i = 0; i < words.length; i++) {
    const freq = Object.assign({}, frequency);

    const currentWord = words[i];
    let isGood = true;

    for (let j = 0; j < currentWord.length; j++) {
      const currentLetter = currentWord[j];
      if (freq[currentLetter] === undefined || freq[currentLetter] === 0) {
        isGood = false;
      } else {
        freq[currentLetter]--;
      }
    }

    if (isGood) result += currentWord.length
  }

  return result;
}

let input1 = ["cat","bt","hat","tree"];
let input2 = "atach";
let output = countCharacters(input1, input2);
console.log(output);

input1 = ["hello", "world", "leetcode"];
input2 = "welldonehoneyr";
output = countCharacters(input1, input2);
console.log(output);