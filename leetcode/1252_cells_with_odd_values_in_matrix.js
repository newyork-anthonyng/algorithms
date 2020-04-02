// Time: O(n * m)
// Space: O(n * m)
function oddCells(n, m, indices) {
  let matrix = [];

  // Time: O(n * m)
  for (let i = 0; i < n; i++) {
    matrix[i] = [];

    for (let j = 0; j < m; j++) {
      matrix[i][j] = 0;
    }
  }

  // Time: O(n * m * indices)
  for (let i = 0; i < indices.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      for (let k = 0; k < matrix[j].length; k++) {
        if (j === indices[i][0]) {
          matrix[j][k]++;
        }

        if (k === indices[i][1]) {
          matrix[j][k]++;
        }
      }
    }
  }

  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 !== 0) {
        count++;
      }
    }
  }

  return count;
}

// let output = oddCells(2, 2, [[1,1], [0,0]]);
// console.log(output);
// let output = oddCells(1, 1, [[0,0],[0,0]]);
// console.log(output);
// Space: O(n + m), Time: O((n * m) + indices + n + m)
function alternateSolution(n, m, indices) {
  const row = Array(n).fill(false);
  const col = Array(m).fill(false);
  indices.forEach(([x, y]) => {
    row[x] = !row[x];
    col[y] = !col[y];
  });
  const rowNum = row.reduce((acc, cur) => {
    if (cur) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  const colNum = col.reduce((acc, cur) => {
    if (cur) {
      return acc + 1;
    } else {
      return acc;
    }
  });

  console.log(row);
  console.log(col);
  console.log('row Num:', rowNum, 'col Num:', colNum);
  return (rowNum * m) + (colNum * n) - (2 * rowNum * colNum);
}

let output = alternateSolution(2, 3, [[1,1], [0,0]]);
console.log(output);