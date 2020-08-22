let input = [
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
console.assert(
  maximalRectangle(input) === 6,
  'first'
);

function maximalRectangle(matrix) {
  if (matrix.length === 0) return 0;
  if (matrix[0].length === 0) return 0;

  const heights = (new Array(matrix[0].length)).fill(0);
  let maxArea = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === '0') {
        heights[j] = 0;
      } else {
        heights[j]++;
      }
    }

    maxArea = Math.max(maxArea, getLargestArea(heights));
  }

  return maxArea;
}

function getLargestArea(heights) {
  let maxArea = 0;

  const stack = [
    { x: 0, height: 0 }
  ];

  for (let i = 0; i < heights.length; i++) {
    const currentElement = { x: i, height: heights[i] };

    while (stack[stack.length - 1].height > currentElement.height) {
      const topElement = stack.pop();
      currentElement.x = topElement.x;

      const area = (i - topElement.x) * topElement.height;
      maxArea = Math.max(maxArea, area);
    }

    stack.push(currentElement);
  }

  while (stack.length > 0) {
    const topElement = stack.pop();
    const area = (heights.length - topElement.x) * topElement.height;
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
}
