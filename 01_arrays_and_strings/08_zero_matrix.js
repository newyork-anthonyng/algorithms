/*
 * Time complexity: O(nm)
 * Space complexity: O(m)
*/
function zeroMatrix(matrix) {
  // find the coordinates of all the zeroes
  // iterate through all coordinates
  // zero out rows; zero out columns

  /*
   * To conserve space, we can use array indexes to keep track of columns/rows of interest, rather than pushing it
   * This would also avoid duplicate rows/columns from entering our array
  */
  const coordinatesHash = {
    rows: [],
    columns: []
  };
  const width = matrix[0].length;
  const height = matrix.length;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j] === 0) {
        coordinatesHash.columns.push(j);
        coordinatesHash.rows.push(i);
      }
    }
  }

  for (let i = 0; i < coordinatesHash.rows.length; i++) {
    const currentRow = coordinatesHash.rows[i];
    for (let j = 0; j < width; j++) {
      matrix[currentRow][j] = 0;
    }
  }

  for (let i = 0; i < coordinatesHash.columns.length; i++) {
    const currentColumn = coordinatesHash.columns[i];
    for (let j = 0; j < height; j++) {
      matrix[j][currentColumn] = 0;
    }
  }
}

const array = [
  [1, 1, 1, 1, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1]
];
zeroMatrix(array);
console.log(array);

/**
 * Time complexity: O(mn)
 * Space complexity: O(1)
*/
function zeroMatrix_space_1(matrix) {
  const rowHasZero = false;
  const columnHasZero = false;

  // Use the first row and column to keep track of what rows/columns to zero
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      rowHasZero = true;
      break;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      columnHasZero = true;
      break;
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      nullifyRow(matrix, i);
    }
  }

  for (let i = 1; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      nullifyColumn(matrix, i);
    }
  }

  if (rowHasZero) {
    nullifyRow(matrix, 0);
  }

  if (columnHasZero) {
    nullifyColumn(matrix, 0);
  }
}

function nullifyRow(matrix, rowIndex) {
  for (let i = 0; i < matrix[rowIndex].length; i++) {
    matrix[rowIndex][i] = 0;
  }
}

function nullifyColumn(matrix, columnIndex) {
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[i][columnIndex] = 0;
  }
}
