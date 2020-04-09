// Time: O(N log N)
// Space: O(N)
function sortByBits(arr) {
  let applesauce = [];

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    const binaryString = currentNumber.toString(2);
    const onesCount = get1sCount(binaryString);

    if (applesauce[onesCount] === undefined) {
      applesauce[onesCount] = [];
    }

    applesauce[onesCount].push(currentNumber);
  }

  let result = [];
  for (let i = 0; i < applesauce.length; i++) {
    if (applesauce[i] === undefined) {
      continue;
    }

    result.push(...applesauce[i].sort((a, b) => a - b));
  }

  return result;
}

function getBinaryString(num) {
  return num.toString(2);
}

function get1sCount(string) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '1') {
      count++;
    }
  }

  return count;
}

let input = [0,1,2,3,4,5,6,7,8];
let output = sortByBits(input);
console.log(output);

function alternate(arr) {
  return arr.sort((a, b) => (bitCount(a) - bitCount(b)) || (a - b));
}

function bitCount(num) {
  let sum = 0;

  while (num) {
    sum += num & 1;
    num = num >> 1;
  }

  return sum;
}