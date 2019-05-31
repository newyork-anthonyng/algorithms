const Node = require("./linkedList");

// This is the solution from the book
function sumLists(list1, list2) {
  return _sumLists(list1, list2, 0);
}

function _sumLists(list1, list2, carry) {
  const isEmptySum = list1 === null &&
    list2 === null &&
    carry === 0

  if (isEmptySum) {
    return null;
  }

  let value = carry;
  if (list1) {
    value += list1.value;
  }
  if (list2) {
    value += list2.value;
  }

  let secondDigit = value % 10;
  let resultNode = new Node(secondDigit);

  resultNode.next = _sumLists(
    list1 ? list1.next : null,
    list2 ? list2.next : null,
    parseInt(value / 10)
  );

  return resultNode;
}

let head1 = new Node(7);
let second = new Node(1);
let third = new Node(6);
head1.append(second);
second.append(third);

let head2 = new Node(5);
let second2 = new Node(9);
let third2 = new Node(2);
head2.append(second2);
second2.append(third2);

const sum = sumLists(head1, head2);
sum.print();
console.log("2 -> 1 -> 9");
console.log("617 + 295 = 912");
