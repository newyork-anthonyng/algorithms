// https://leetcode.com/problems/sort-array-by-parity/
function sortArrayByParity(array) {
  let evenIndex = 0;

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    if (isEven(currentItem)) {
      swap(array, evenIndex, i);
      evenIndex++;
    }
  }

  return array;
}

function isEven(number) {
  return number % 2 === 0;
}

function swap(array, firstIndex, secondIndex) {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

let result = sortArrayByParity([3, 1, 2, 4]);
console.log(result);
result = sortArrayByParity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);
