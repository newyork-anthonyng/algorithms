// Time O(m * n), Space O(1)
// function countNegatives(grid) {
//   let count = 0;

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (grid[i][j] < 0) {
//         count++;
//       }
//     }
//   }

//   return count;
// }

function countNegatives(grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    // we know that list is sorted in descending order
    // we can take advantage of this by breaking early
    for (let k = grid[i].length - 1; k >= 0; j--) {
      if (grid[i][j] >= 0) {
        break;
      }

      count++;
    }
  }

  return count;
}

let input = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];
let output = countNegatives(input);
console.assert(8 === output);