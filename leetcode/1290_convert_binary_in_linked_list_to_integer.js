function ListNode(val) {
  this.val = val;
  this.next = null;
}

function getDecimalValue(head) {
  
}

function createList(arr) {
  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 0; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

