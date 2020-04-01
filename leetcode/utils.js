function ListNode(val) {
  this.val = val;
  this.next = null;
}

function printList(head) {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}

function createList(arr) {
  let head = new ListNode(-1);
  let current = head;

  for (let i = 0; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head.next;
}

module.exports = {
  ListNode,
  printList,
  createList
}