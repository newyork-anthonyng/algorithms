/*
 * Time complexity: O(n^2)
 * Space complexity: O(1)
*/
// assume that matrix is nxn
function rotate(matrix) {
  const n = matrix.length; // same as matrix[0].length

  // go through the first half of matrix layers
  for (let layer = 0; layer < n / 2; layer++) {
    const first = layer;
    const last = n - 1 - layer; // this is the corresponding layer that we are flipping
    // if 8x8 matrix, then we rotate row 0 with row 7; row 1 with row 6; etc.

    for (let i = first; i < last; i++) {
      const offset = i - first;

      const top = matrix[first][i];

      // left to top
      matrix[first][i] = matrix[last - offset][first];
      // bottom to left
      matrix[last - offset][first] = matrix[last][last - offset];
      // right to bottom
      matrix[last][last - offset] = matrix[i][last];
      // top to right
      matrix[i][last] = top;
    }
  }
}

const matrix = [
  [1, 2, 3, 4],
  [3, 2, 1, 0],
  [4, 5, 6, 5],
  [6, 7, 8, 7]
];
rotate(matrix);
console.log(matrix);
