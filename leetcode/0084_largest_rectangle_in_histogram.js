let input = [2, 1];
console.assert(
  usingStacks(input) === 2,
  'first'
);

input = [2, 1, 5, 6, 2, 3];
console.assert(
  usingStacks(input) === 10,
  'second'
);

input = [1, 1];
console.assert(
  usingStacks(input) === 2,
  'third'
);

input = [2, 1, 2];
console.assert(
  usingStacks(input) === 3,
  'fourth'
);


function largestRectangleArea(heights) {
  let result = 0;

  for (let i = 0; i < heights.length; i++) {
    const currentHeight = heights[i];
    let maxAtPoint = currentHeight;

    let leftPointer = i - 1;
    while (heights[leftPointer] >= currentHeight) {
      maxAtPoint += currentHeight;
      leftPointer--;
    }

    let rightPointer = i + 1;
    while (heights[rightPointer] >= currentHeight) {
      maxAtPoint += currentHeight;
      rightPointer++;
    }

    result = Math.max(result, maxAtPoint);
  }

  return result;
}

function usingStacks(heights) {
  let maxArea = 0;
  const stack = [
    { x: 0, height: 0 }
  ];

  for (let i = 0; i < heights.length; i++) {

    const current = { x: i, height: heights[i] };

    if (current.height > stack[stack.length - 1].height) {
      stack.push(current);
    } else if (current.height === stack[stack.length - 1].height) {
      // do nothing
    } else {
      // pop off stack until we find something smaller
      while (stack[stack.length - 1].height > current.height) {
        const lastElement = stack.pop();
        const area = (i - lastElement.x) * lastElement.height;
        current.x = lastElement.x;
        maxArea = Math.max(maxArea, area);
      }

      stack.push(current);
    }
  }

  while (stack.length > 0) {
    const lastElement = stack.pop();
    const area = (heights.length - lastElement.x) * lastElement.height;
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
}
