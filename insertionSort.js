const insert = function(array, rightIndex, value) {
  let i;

  for (i = rightIndex; i >= 0 && array[i] > value; i--) {
    array[i + 1] = array[i];
  }

  array[i + 1] = value;
}

let array = [1, 3, 4];
insert(array, 2, 2);
console.log(array);

const insertionSort = function(array) {
  for (let i = 1; i < array.length - 1; i++) {
    insert(array, i, array[i + 1]);
  }
};

array = [1, 8, 3, -1, 100];

insertionSort(array);
console.log(array);
