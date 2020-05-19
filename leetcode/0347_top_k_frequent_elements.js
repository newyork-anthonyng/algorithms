function topKFrequent(nums, k) {
  const count = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (count[num] === undefined) {
      count[num] = 0;
    }

    count[num]++;
  }

  let array = [];
  const keys = Object.keys(count);
  for (let i = 0; i < keys.length; i++) {
    array.push([+keys[i], count[keys[i]]]);
  }

  array.sort((a, b) => b[1] - a[1]);
  const result = array.map(a => a[0])

  return result.slice(0, k);
}

let input = [1,1,1,2,2,3];
let output = topKFrequent(input, 2);
console.log(output);
