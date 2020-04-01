const { createList } = require('./utils');

// function getDecimalValue(head) {
//   const numbers = [];

//   let current = head;
//   while (current !== null) {
//     numbers.push(current.val);

//     current = current.next;
//   }

//   console.log(numbers);
//   return parseInt(numbers.join(''), 2);
// }

// alternative answer
// function getDecimalValue(head) {
//   let result = 0;

//   let current = head;
//   while (current !== null) {
//     // as we left shift bits, we're effectively doubling the numbers
//     result = result * 2 + current.val;
//     current = current.next;
//   }

//   return result;
// }

// same as with previous answer. but we stick to bitwise operations
function getDecimalValue(head) {
  let result = 0;

  let current = head;
  while (current !== null) {
    result = result << 1;
    result |= current.val;

    current = current.next;
  }

  return result;
}

let input = createList([1, 0, 1]);
let output = getDecimalValue(input);
console.assert(output === 5);

input = createList([1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]);
output = getDecimalValue(input);
console.assert(output === 18880);