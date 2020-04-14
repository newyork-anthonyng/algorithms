function relativeSortArray(arr1, arr2) {
  const frequency = [];

  for (let i = 0; i < arr1.length; i++) {
    if (frequency[arr1[i]] === undefined) {
      frequency[arr1[i]] = 0;
    }

    frequency[arr1[i]]++;
  }

  const result = [];
  for (let i = 0; i < arr2.length; i++) {
    const currentNumber = arr2[i];

    while (frequency[currentNumber] > 0) {
      result.push(currentNumber);
      frequency[currentNumber]--;
    }
  }

  for (let i = 0; i < frequency.length; i++) {
    if (frequency[i] === undefined || frequency[i] === 0) continue;

    while (frequency[i] > 0) {
      result.push(i);
      frequency[i]--;
    }
  }

  return result;
}

let arr1 = [2,3,1,3,2,4,6,7,9,2,19];
let arr2 = [2,1,4,3,9,6];
let output = relativeSortArray(arr1, arr2);
console.log(output);