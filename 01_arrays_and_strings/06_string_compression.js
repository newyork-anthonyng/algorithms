function stringCompression(string) {
  let result = string[0];
  let count = 0;
  let prevString = string[0];

  for (let i = 0; i < string.length; i++) {
    if (prevString === string[i]) {
      count++;
    } else {
      result += `${count}`;

      prevString = string[i];
      result += string[i];
      count = 1;
    }
  }
  result += `${count}`;

  return result.length < string.length ? result : string;
}

console.assert(
  stringCompression("aabcccccaaa") === "a2b1c5a3",
  "aabcccccaaa"
);

console.assert(
  stringCompression("def") === "def",
  "def"
);
