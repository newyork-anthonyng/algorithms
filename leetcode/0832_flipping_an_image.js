// https://leetcode.com/problems/flipping-an-image/
function flipAndInvertImage(matrix) {
  return matrix.map(row => {
    return invertImage(flipImage(row));
  });
}

function flipImage(array) {
  return array.reverse();
}

function invertImage(array) {
  return array.map(item => item ^ 1);
}

let matrix = [[1,1,0],[1,0,1],[0,0,0]];
let result = flipAndInvertImage(matrix);
console.log(result);
