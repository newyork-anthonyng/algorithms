/*
 * Time complexity: O(n)
 * Space complexity: 0(1)
* */
function isStringUnique(string) {
  // another alternative is to use an array with 26 spaces
  // alphabet[0] would represent "a", alphabet[1] would represet "b", etc.
  const obj = {};

  for (let i = 0; i < string.length; i++) {
    const current = string[i];
    if (obj[current] === true) {
      return false;
    }

    obj[current] = true;
  }

  return true;
}

console.assert(isStringUnique("abcdefg") === true, "abcdefg should be unique");
console.assert(isStringUnique("aaaa") === false, "aaaa is not unique");

function isStringUnique_noAdditionalSpace(_string) {
  const stringArray = _string.split("");
  mergeSort(stringArray);
  const string = stringArray.join("");

  for (let i = 0; i < string.length - 1; i++) {
    const current = string[i];
    const next = string[i + 1];

    if (current === next) {
      return false;
    }
  }

  return true;
}

function mergeSort(array) {
  _mergeSort(array, 0, array.length - 1);
}

function _mergeSort(array, startIndex, endIndex) {
  if (startIndex < endIndex) {
    const midPoint = Math.floor((startIndex + endIndex) / 2);
    _mergeSort(array, startIndex, midPoint);
    _mergeSort(array, midPoint + 1, endIndex);

    merge(array, startIndex, midPoint, endIndex);
  }
}

function merge(array, startIndex, midPoint, endIndex) {
  const leftHalf = [];
  const rightHalf = [];

  for (let i = startIndex; i <= midPoint; i++) {
    leftHalf.push(array[i]);
  }

  for (let i = midPoint + 1; i <= endIndex; i++) {
    rightHalf.push(array[i]);
  }

  let leftIndex = 0;
  let rightIndex = 0;
  let index = startIndex;

  while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
    if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
      array[index] = leftHalf[leftIndex];
      leftIndex++;
    } else {
      array[index] = rightHalf[rightIndex];
      rightIndex++;
    }
    index++;
  }

  while (leftIndex < leftHalf.length) {
    array[index] = leftHalf[leftIndex];
    leftIndex++;
    index++;
  }

  while (rightIndex < rightHalf.length) {
    array[index] = rightHalf[rightIndex];
    rightIndex++;
    index++;
  }
}

console.assert(isStringUnique_noAdditionalSpace("abcdefg") === true, "abcdefg should be unique");
console.assert(isStringUnique_noAdditionalSpace("abca") === false, "abca is not unique");
