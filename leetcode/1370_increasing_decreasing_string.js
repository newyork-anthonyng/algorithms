// Space: O(n)
// Time: O(n * n * n)
function sortString(s) {
  let input = s.split('');
  let result = [];

  let currentLetter;
  let getSmallest = true;

  while (input.length !== 0) {
    let index;

    if (getSmallest) {
      index = getNextLargestLetter(input, currentLetter);
    } else {
      index = getNextSmallestLetter(input, currentLetter);
    }

    if (index === undefined) {
      getSmallest = !getSmallest;
      currentLetter = undefined;
    } else {
      const lastLetter = input.splice(index, 1);
      currentLetter = lastLetter;
      result.push(currentLetter);
    }
  }

  return result.join('');
}

function getNextLargestLetter(array, a) {
  let result;
  for (let i = 0; i < array.length; i++) {
    if (result === undefined) {
      if (a !== undefined) {
        if (array[i] > a) {
          result = i;
        }
      } else {
        result = i;
      }
    }

    if (a !== undefined) {
      if (array[i] > a && array[i] < array[result]) {
        result = i;
      }
    } else {
      if (array[i] < array[result]) {
        result = i;
      }
    }

  }

  return result;
}

function getNextSmallestLetter(array, a) {
  let result;
  for (let i = 0; i < array.length; i++) {
    if (result === undefined) {
      if (a !== undefined) {
        if (array[i] < a) {
          result = i;
        }
      } else {
        result = i;
      }
    }

    if (a !== undefined) {
      if (array[i] < a && array[i] > array[result]) {
        result = i;
      }
    } else {
      if (array[i] > array[result]) {
        result = i;
      }
    }
  }

  return result;
}

// Space: O(1)
// Time: O(s)
function alternative(s) {
  const counts = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - 97]++;
  }

  const result = new Array(Math.max(...counts)).fill('');

  // iterate through each letter of alphabet
  for (let i = 0; i < 26; i++) {
    // iterate through each count of a letter
    for (let j = 0; j < counts[i]; j++) {
      if (j % 2 === 0) {
        result[j] += String.fromCharCode(i + 97);
      } else {
        result[j] = String.fromCharCode(i + 97) + result[j];

      }
    }
  }

  return result.join('');
}

let input = 'aaaabbbbcccc';
// let output = sortString(input);
let output = alternative(input);
console.log(output);