function ListNode(val) {
  this.val = val;
  this.next = null;
}

function mergeTwoLists(l1, l2) {
  let result;

  if (l1.val < l2.val) {
    result = l1;
    l1 = l1.next;
  } else {
    result = l2;
    l2 = l2.next;
  }

  let current = result;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
      current = current.next;
    } else {
      current.next = l2;
      l2 = l2.next;
      current = current.next;
    }
  }

  while (l1) {
    current.next = l1;
    l1 = l1.next;
    current = current.next;
  }

  while (l2) {
    current.next = l2;
    l2 = l2.next;
    current = current.next;
  }

  return result;
}

function createList(array) {
  let head = new ListNode(array[0]);
  let current = head;

  for (let i = 1; i < array.length; i++) {
    const currentNode = new ListNode(array[i]);
    current.next = currentNode;
    current = current.next;
  }

  return head;
}

function printList(linkedList) {
  let current = linkedList;

  while (current) {
    console.log(current.val + '\n⬇️');
    current = current.next;
  }
}

const first = createList([1, 2, 4]);
const second = createList([1, 3, 4]);

const result = mergeTwoLists(first, second);
printList(result);