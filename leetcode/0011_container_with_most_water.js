function maxArea(height) {
  let result = 0;

  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let left = height[i];
      let right = height[j];

      let volume = Math.min(left, right) * (Math.abs(i - j));
      result = Math.max(volume, result);
    }
  }

  return result;
}

function maxArea2(height) {
  let result = 0;

  let leftIndex = 0;
  let rightIndex = height.length -1;

  while (leftIndex < rightIndex) {
    let left = height[leftIndex];
    let right = height[rightIndex];
    let currentArea = Math.min(left, right) * Math.abs(leftIndex - rightIndex);

    result = Math.max(currentArea, result);

    if (height[leftIndex] < height[rightIndex]) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }

  return result;
}

let input = [1,8,6,2,5,4,8,3,7];
// input.length === 9
let result = maxArea2(input);
console.log(result);
console.assert(result === 49);