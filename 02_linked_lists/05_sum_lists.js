const Node = require("./linkedList");

// assume numbers are stored in backwards order
function sumLists(head1, head2) {
  let first = head1;
  let second = head2;
  let carry = 0;
  let resultBefore = null;
  let resultEnd = null;

  while (first !== null || second !== null) {
    const addend1 = first.value || 0;
    const addend2 = second.value || 0;

    let sum = addend1 + addend2 + carry;
    carry = parseInt(sum / 10);
    sum = sum % 10;

    const newNode = new Node(sum);
    if (resultBefore === null) {
      resultBefore = newNode;
      resultAfter = resultBefore;
    } else {
      resultAfter.next = newNode;
      resultAfter = resultAfter.next;
    }

    if (first !== null) {
      first = first.next;
    }
    if (second !== null) {
      second = second.next;
    }
  }

  if (carry) {
    resultAfter.next = new Node(carry);
    resultAfter = resultAfter.next;
  }

  return resultBefore;
}

let head1 = new Node(3);
let second = new Node(5);
let third = new Node(8);
head1.append(second);
second.append(third);

let head2 = new Node(4);
let second2 = new Node(7);
let third2 = new Node(2);
head2.append(second2);
second2.append(third2);

const sum = sumLists(head1, head2);
sum.print();
