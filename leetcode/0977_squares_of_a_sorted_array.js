// https://leetcode.com/problems/squares-of-a-sorted-array/
function sortedSquares(array) {
  // return array.map(square).sort((a, b) => a - b);
  let result = array.map(square);
  quickSort(result);
  return result;
}

function square(num) {
  return num * num;
}

let array = [-4, -1, 0, 3, 10];
let result = sortedSquares(array);
console.log(result);

function quickSort(array) {
  _quickSort(array, 0, array.length - 1);
}

function _quickSort(array, startIndex, endIndex) {
  if (startIndex < endIndex) {
    const pivotIndex = partition(array, startIndex, endIndex);
    _quickSort(array, startIndex, pivotIndex - 1);
    _quickSort(array, pivotIndex + 1, endIndex);
  }
}

function partition(array, startIndex, endIndex) {
  const pivotValue = array[endIndex];
  let pivotIndex = startIndex;

  for (let i = startIndex; i < endIndex; i++) {
    if (array[i] <= pivotValue) {
      swap(array, i, pivotIndex);
      pivotIndex++;
    }
  }

  swap(array, pivotIndex, endIndex);
  return pivotIndex;
}

function swap(array, first, end) {
  const temp = array[first];
  array[first] = array[end];
  array[end] = temp;
}
