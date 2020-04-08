function findTheDistanceValue(arr1, arr2, d) {
  let result = 0;

  for (let i = 0; i < arr1.length; i++) {
    const a = arr1[i];
    let isValid = true;

    for (let j = 0; j < arr2.length; j++) {
      const b = arr2[j];
      if (Math.abs(a - b) <= d) {
        isValid = false;
      }
    }

    if (isValid) {
      result++;
    }
  }

  return result;
}

let output = findTheDistanceValue([4,5,8], [10,9,1,8], 2);
console.log(output);

output = findTheDistanceValue([1,4,2,3], [-4,-3,6,10,20,30], 3);
console.log(output);

output = findTheDistanceValue([2,1,100,3], [-5,-2,10,-3,7], 6);
console.log(output);