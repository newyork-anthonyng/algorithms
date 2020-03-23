function ListNode(val) {
  this.val = val;
  this.next = null;
}

function removeNthFromEnd(head, n) {
  let current = false;
  let leftPointer = head;
  let rightPointer = head;

  for (let i = 0; i < n - 1; i++) {
    rightPointer = rightPointer.next;
  }

  while (rightPointer.next !== null) {
    leftPointer = leftPointer.next;
    rightPointer = rightPointer.next;

    if (current === false) {
      current = head;
    } else {
      current = current.next;
    }
  }

  console.log('********');
  console.log('left', leftPointer);
  console.log('right', rightPointer);
  console.log('current', current);

  if (leftPointer === head) {
    return head.next;
  } else if (current === false) {
    return null;j
  }
  const nodeToBeDeleted = leftPointer;
  current.next = leftPointer.next;
  nodeToBeDeleted.next = null;

  return head;
}

// let first = new ListNode(1)
// let second = new ListNode(2);
// let third = new ListNode(3);
// let fourth = new ListNode(4);
// let fifth = new ListNode(5);
// first.next = second;
// second.next = third;
// third.next = fourth;
// fourth.next = fifth;

// let result = removeNthFromEnd(first, 2);
// let current = first;
// while(current != null) {
//   console.log(current.val);
//   current = current.next;
// }

let first = new ListNode(1);
let second = new ListNode(2);
first.next = second;
let result = removeNthFromEnd(first, 1);
console.log(result);

// first = new ListNode(1);
// result = removeNthFromEnd(first, 1);
// console.log(result);