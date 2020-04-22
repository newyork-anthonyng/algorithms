const { ListNode, createList, printList } = require('./utils');

function reverseList(head) {
  if (head === null) return null;
  
  const result = new ListNode(-1);
  let current = head;

  while (current !== null) {
    const previousCurrentNext = current.next;
    const previousNext = result.next;
    result.next = current;
    result.next.next = previousNext;

    current = previousCurrentNext;
  }

  return result.next;
}

let input = createList([1, 2, 3, 4, 5]);
let output = reverseList(input);
printList(output);