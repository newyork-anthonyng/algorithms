const Node = require("./linkedList");

// This is the solution from the book
// This handles sums of linkedlists that are in order
function sumLists(list1, list2) {
  const length1 = length(list1);
  const length2 = length(list2);

  if (length1 < length2) {
    list1 = padList(list1, length2 - length1);
  } else if (length2 < length1) {
    list2 = padList(list2, length1 - length2);
  }

  const sum = addListsHelper(list1, list2);

  if (sum.carry === 0) {
    return sum.sum;
  } else {
    return insertBefore(sum.sum, sum.carry);
  }
}

function addListsHelper(list1, list2) {
  if (list1 === null && list2 === null) {
    return {
      sum: null,
      carry: 0
    };
  }

  const sum = addListsHelper(list1.next, list2.next);
  const value = sum.carry + list1.value + list2.value;

  const fullResult = insertBefore(
    sum.sum,
    value % 10
  );

  sum.sum = fullResult;
  sum.carry = parseInt(value / 10);
  return sum;
}

function length(node) {
  let count = 0;
  let currentNode = node;

  while (currentNode !== null) {
    currentNode = currentNode.next;
    count++;
  }

  return count;
}

function padList(list, padding) {
  let current = list;

  for (let i = 0; i < padding; i++) {
    current = insertBefore(current, 0);
  }

  return current;
}

function insertBefore(list, data) {
  node = new Node(data);

  if (list !== null) {
    node.next = list;
  }

  return node;
}

let head1 = new Node(6);
let second = new Node(1);
let third = new Node(7);
head1.append(second);
second.append(third);

let head2 = new Node(2);
let second2 = new Node(9);
let third2 = new Node(5);
head2.append(second2);
second2.append(third2);

const sum = sumLists(head1, head2);
sum.print();
console.log("617 + 295 = 912");
