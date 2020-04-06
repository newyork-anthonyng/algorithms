// Time: O(rows * rows)
// Space: O(1)
function luckyNumbers(matrix) {
  let results = [];

  for (let i = 0; i < matrix.length; i++) {
    const currentRow = matrix[i];

    let smallestNumber = Infinity;
    let smallestIndex = -1;
    for (let j = 0; j < matrix[i].length; j++) {
      if (currentRow[j] < smallestNumber) {
        smallestNumber = currentRow[j];
        smallestIndex = j;
      }
    }

    let isTrue = true;
    for (let k = 0; k < matrix.length; k++) {
      if (k === i) continue;

      if (matrix[k][smallestIndex] > smallestNumber) {
        isTrue = false;
      }
    }

    if (isTrue) {
      results.push(smallestNumber);
    }
  }

  return results;
}

let input = [[3,7,8],[9,11,13],[15,16,17]]
let output = luckyNumbers(input);
console.log(output);

input = [[1,10,4,2],[9,3,8,7],[15,16,17,12]];
output = luckyNumbers(input);
console.log(output);

function alternative(matrix) {
  let minimum = [];
  let maximum = [];

  for (let i = 0; i < matrix.length; i++) {
    let applesauce = Infinity;

    for (let j = 0; j < matrix[i].length; j++) {
      applesauce = Math.min(applesauce, matrix[i][j]);
    }

    minimum[i] = applesauce;
  }


  for (let i = 0; i < matrix[0].length; i++) {
    let applesauce = -Infinity;

    for (let j = 0; j < matrix.length; j++) {
      applesauce = Math.max(applesauce, matrix[j][i]);
    }

    maximum[i] = applesauce;
  }

  let result = [];

  for (let i = 0; i < minimum.length; i++) {
    if (maximum.includes(minimum[i])) {
      result.push(minimum[i]);
    }
  }

  return result;
}

input = [[3,7,8],[9,11,13],[15,16,17]]
output = alternative(input);
console.log(output);