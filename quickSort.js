function swap(array, firstIndex, secondIndex) {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
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

function quickSort(array, startIndex, endIndex) {
  if (startIndex < endIndex) {
    const pivotIndex = partition(array, startIndex, endIndex);
    quickSort(array, startIndex, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, endIndex);
  }
}

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length - 1);
console.log(array);
