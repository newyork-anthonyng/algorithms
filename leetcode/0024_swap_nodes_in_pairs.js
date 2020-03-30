function ListNode(val) {
  this.val = val;
  this.next = null;
}

function swapPairs(head) {
  if (!head) return null;

  let result = new ListNode(-1);
  result.next = head;

  let current = result;
  let second = head;
  let third = head.next;

  while (current && second && third) {
    current.next = third;
    second.next = third.next;
    third.next = second;

    current = second;
    second = current && current.next;
    third = second && second.next;
  }

  return result.next;
}

function createList(arr) {
  const head = new ListNode(arr[0]);

  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);

    current = current.next;
  }

  return head;
}

function printLinkedList(head) {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}

let input = createList([1, 2, 3, 4]);
let result = swapPairs(input);
printLinkedList(result);