const insert = function(array, rightIndex, value) {
  let i;

  for (i = rightIndex; i >= 0 && array[i] > value; i--) {
    array[i + 1] = array[i];
  }

  array[i + 1] = value;
}

let array = [1, 3, 4];
insert(array, 2, 2);

const insertionSort = function(array) {
  const length = array.length - 1;
  for (let i = 0; i < length; i++) {
    insert(array, i, array[i + 1]);
  }
};

array = [9, 5, 3, 17, 8];

insertionSort(array);
console.log(array);
