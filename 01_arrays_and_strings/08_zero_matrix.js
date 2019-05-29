function zeroMatrix(matrix) {
  // find the coordinates of all the zeroes
  // iterate through all coordinates
  // zero out rows; zero out columns

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
