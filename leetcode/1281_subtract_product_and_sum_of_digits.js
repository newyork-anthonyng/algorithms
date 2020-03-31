function subtractProductAndSum(n) {
  let sum = 0;
  let product = 1;
  let current = n;

  while (current > 0) {
    let applesauce;

    if (current < 10) {
      applesauce = current;
      current = 0;
    } else {
      applesauce = current % 10;
      current = Math.floor(current / 10);
    }

    sum = sum + applesauce;
    product = product * applesauce;
  }

  return product - sum;
}

let input = 234;
let output = subtractProductAndSum(input);
console.log(output);