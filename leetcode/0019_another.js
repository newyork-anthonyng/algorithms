function ListNode(val) {
  this.val = val;
  this.next = null;
}

function removeNthFromEnd(head, n) {
  // Create a node before LinkedList to make it easier to work with
  let left = before = { next: head };
  let right = head;

  while (n--) {
    right = right.next;
    
  }

  while (right) {
    right = right.next;
    left = left.next;
  }

  left.next = left.next.next;

  return before.next;
}

let first = new ListNode(1);
let second = new ListNode(2);
first.next = second;
let result = removeNthFromEnd(first, 2);
console.log(result);