function dailyTemperatures(T) {
  const result = [];

  for (let i = 0; i < T.length; i++) {
    result[i] = 0;
    const currentTemperature = T[i];

    for (let j = i + 1; j < T.length; j++) {
      if (T[j] > currentTemperature) {
        result[i] = j - i;
        break;
      }
    }
  }

  return result;
}

function alternate(T) {
  const result = [];
  const stack = [];

  for (let i = T.length - 1; i >= 0; i--) {
    while (stack.length > 0 && T[i] >= T[stack[stack.length - 1]]) {
      stack.pop();
    }

    if (stack.length > 0) {
      result[i] = stack[stack.length - 1] - i;
    } else {
      result[i] = 0;
    }

    stack.push(i);
  }

  return result;
}

let input = [73, 74, 75, 71, 69, 72, 76, 73]
let output = alternate(input);
console.log(output);
