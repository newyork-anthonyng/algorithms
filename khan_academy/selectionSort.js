const selectionSort = function(array) {
  for (let i = 0; i < array.length; i++) {
    // get smallest number from array, i => array.length - 1
    let smallestIndex = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[smallestIndex]) {
        smallestIndex = j;
      }
    }

    // swap that number with the current index
    const temp = array[i];
    array[i] = array[smallestIndex];
    array[smallestIndex] = temp;
  }

  return array;
};

const array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
console.log(array);
