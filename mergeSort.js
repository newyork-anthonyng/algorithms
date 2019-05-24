
// Takes an array with two sorted sub-arrays
// It merges the two sorted sub-arrays, from [p..q], and [q+1..r]
function merge(array, p, q, r) {
  // make copy of arrays
  const leftHalf = [];
  const rightHalf = [];

  let overallCounter = p;
  for (let i = 0; overallCounter <= q; i++, overallCounter++) {
    leftHalf[i] = array[overallCounter];
  }

  for (let j = 0; overallCounter <= r; j++, overallCounter++) {
    rightHalf[j] = array[overallCounter];
  }

  // merge the sorted sub-arrays together
  overallCounter = p;
  let leftHalfIndex = 0;
  let rightHalfIndex = 0;
  while (leftHalfIndex < leftHalf.length && rightHalfIndex < rightHalf.length) {
    if (leftHalf[leftHalfIndex] < rightHalf[rightHalfIndex]) {
      array[overallCounter] = leftHalf[leftHalfIndex];
      leftHalfIndex++;
    } else {
      array[overallCounter] = rightHalf[rightHalfIndex];
      rightHalfIndex++;
    }

    overallCounter++;
  }

  while (leftHalfIndex < leftHalf.length) {
    array[overallCounter] = leftHalf[leftHalfIndex];
    overallCounter++;
    leftHalfIndex++;
  }

  while (rightHalfIndex < rightHalf.length) {
    array[overallCounter] = rightHalf[rightHalfIndex];
    overallCounter++;
    rightHalfIndex++;
  }
}

let array = [3, 7, 12, 14, 2, 6, 9, 11];
merge(
  array,
  0,
  Math.floor((0 + array.length - 1) / 2),
  array.length - 1
);

console.log(array);

function mergeSort(array, p, r) {
  if (p < r) {
    const midPoint = Math.floor((p + r) / 2);
    mergeSort(array, p, midPoint);
    mergeSort(array, midPoint + 1, r);

    merge(array, p, midPoint, r);
  }
}

array = [10, 7, 4, 3, -1, 23];
mergeSort(array, 0, array.length - 1);
console.log(array);
