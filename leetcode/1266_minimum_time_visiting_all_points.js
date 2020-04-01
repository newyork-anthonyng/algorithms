// O(n) time. O(1) space
// function minTimeToVisitAllPoints(points) {
//   let counter = 0;

//   let currentPoint = points[0];
//   for (let i = 1; i < points.length; i++) {
//     let xDiff = Math.abs(currentPoint[0] - points[i][0]);
//     let yDiff = Math.abs(currentPoint[1] - points[i][1]);

//     while (xDiff !== 0 && yDiff !== 0) {
//       xDiff--;
//       yDiff--;
//       counter++;
//     }

//     counter += xDiff;
//     counter += yDiff;

//     currentPoint = points[i];
//   }

//   return counter;
// }

function minTimeToVisitAllPoints(points) {
  let counter = 0;

  let currentPoint = points[0];
  for (let i = 1; i < points.length; i++) {
    const xDiff = currentPoint[0] - points[i][0];
    const yDiff = currentPoint[1] - points[i][1];
    const diff = Math.max(
      Math.abs(xDiff),
      Math.abs(yDiff)
    )

    counter += diff;
    currentPoint = points[i];
  }

  return counter;
}

let input = [[1, 1], [3, 4], [-1, 0]];
let output = minTimeToVisitAllPoints(input);
console.log(output);

input = [[3, 2], [-2, 2]];
output = minTimeToVisitAllPoints(input);
console.log(output);