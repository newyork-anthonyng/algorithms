const insert = function(array, rightIndex, value) {
  let i;
  for (i = rightIndex; i >= 0 && value < array[i]; i--) {
    array[i + 1] = array[i];
  }

  array[i + 1] = value;
}

const insertionSort = function(array) {
  const len = array.length;
  for (let i = 0; i < len - 1; i++) {
    insert(array, i, array[i + 1]);
  }
};

const array = [1, 8, 3, -1];

insertionSort(array);
console.log(array);
