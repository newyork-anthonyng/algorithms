let input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.assert(
  trap(input) === 6,
  'first'
);

function trap(height) {
  let result = 0;
  let maxLeftSeen = 0;
  let maxRightSeen = 0;
  const maxRightSeenArray = [];

  for (let i = height.length - 1; i >= 0; i--) {
    maxRightSeen = Math.max(height[i], maxRightSeen);
    maxRightSeenArray[i] = maxRightSeen;
  }

  for (let i = 0; i < height.length; i++) {
    const shortestTallestNeighbor = Math.min(maxLeftSeen, maxRightSeenArray[i]);

    if (height[i] < shortestTallestNeighbor) {
      result = result + (shortestTallestNeighbor - height[i]);
    }

    maxLeftSeen = Math.max(maxLeftSeen, height[i]);
  }

  return result;
}

function withPointers(height) {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let result = 0;
  let leftMax = 0;
  let rightMax = 0;

  while (leftPointer < rightPointer) {
    if (height[leftPointer] < height[rightPointer]) {
      if (height[leftPointer] >= leftMax) {
        leftMax = height[leftPointer];
      } else {
        result += (leftMax - height[leftPointer]);
      }
      left++;
    } else {
      if (height[rightPointer] >= rightMax) {
        rightMax = height[rightPointer];
      } else {
        result += (rightMax - height[rightPointer]);
      }
      right--;
    }
  }

  return result;
}
