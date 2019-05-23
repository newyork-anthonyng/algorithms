const linearSearch = function (array, targetValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === targetValue) {
      return i;
    }
  }

  return -1;
}

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
      41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

const result = linearSearch(primes, 73);
console.log("Found prime at index " + result);
