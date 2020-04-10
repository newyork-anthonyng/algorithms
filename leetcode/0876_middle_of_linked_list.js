const {
  printList,
  createList
} = require("./utils");

function middleNode(head) {
  let count = 0;

  let current = head;
  while (current !== null) {
    current = current.next;
    count++;
  }

  let target;
  if (count % 2 === 0) {
    target = (count / 2);
  } else {
    target = Math.floor(count / 2);
  }

  let result = head;
  while (target--) {
    result = result.next;
  }

  return result;
}

let input = createList([1]);
let output = middleNode(input);
// printList(output);

function alternative(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

input = createList([1,2,3,4,5,6]);
output = alternative(input);
printList(output);