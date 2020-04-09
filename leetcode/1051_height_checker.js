// Time: O(n log N)
// Space: O(n)
function heightChecker(heights) {

  const sorted = heights.slice().sort((a, b) => a - b);

  let result = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sorted[i]) {
      result++;
    }
  }

  return result;
}

// let output = heightChecker([1, 1, 4, 2, 1, 3]);
// console.log(output);

// output = heightChecker([5,1,2,3,4]);
// console.log(output);

// output = heightChecker([1,2,3,4,5]);
// console.log(output);


function alternative(heights) {
  const counts = new Array(101).fill(0);

  // this solution replaces the sort with this "counts" array
  for (let i = 0; i < heights.length; i++) {
    counts[heights[i]]++;
  }

  let idx = 0;
  let answer = 0;

  for (let i = 1; i < 101; i++) {
    while (counts[i]--) {
      if (heights[idx++] !== i) {
        answer++;
      }
    }
  }

  return answer;
}

output = alternative([1, 1, 4, 2, 1, 3]);
console.log(output);