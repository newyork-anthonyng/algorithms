const assert = require("assert");
const Node = require("./linkedList.js");

function loopDetection(head) {
  let slowCount = head;
  let fastCount = head;

  while (fastCount !== null) {
    fastCount = fastCount.next;
    if (fastCount !== null) {
      fastCount = fastCount.next;
    }

    slowCount = slowCount.next;

    if (fastCount === slowCount) {
      break;
    }
  }

  if (fastCount === null) {
    return;
  }

  slowCount = head;
  while (slowCount !== fastCount) {
    slowCount = slowCount.next;
    fastCount = fastCount.next;
  }
  return slowCount;
}

const head = Node.createNodes([
  1, 2, 3, 4, 5, 6, 7, 8, 9
]);

const fourth = head.next.next.next;
const last = head.next.next.next.next.next.next.next.next;
last.next = fourth;

const result = loopDetection(head);
assert(
  result === fourth
);
