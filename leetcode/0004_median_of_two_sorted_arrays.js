function findMedianOfTwoSortedArrays(array1, array2) {
  const totalLength = array1.length + array2.length;
  const destination = Math.ceil(totalLength / 2);
  const mergedArray = [];

  while (mergedArray.length <= destination) {
    const first = array1[0];
    const second = array2[0];
    if (first === undefined) {
      mergedArray.push(array2.shift());
    } else if (second === undefined) {
      mergedArray.push(array1.shift());
    } else {
      if (first < second) {
        mergedArray.push(array1.shift());
      } else {
        mergedArray.push(array2.shift());
      }
    }
  }

  let result = 0;
  if (totalLength  % 2 === 0) {
    const midpoint = totalLength / 2;
    result = (mergedArray[midpoint - 1] + mergedArray[midpoint]) / 2;
  } else {
    const midpoint = Math.floor(totalLength / 2);
    result = mergedArray[midpoint];
  }

  return result;
}

console.assert(
  findMedianOfTwoSortedArrays([1, 3], [2]) === 2,
  'first'
);

console.assert(
  findMedianOfTwoSortedArrays([1, 2], [3, 4]) === 2.5,
  'second'
);
