const assert = require("assert");
const Node = require("./linkedList.js");

function intersection(list1, list2) {
  // iterate through list1 and list2
  // check if they have the same end node
  // if not, return null
  // keep track of each lists' length

  // chop the longer list so that both lists have the same length
  // iterate through the new list1 and list2 until we go to a node where they are equal
  // return this node

  let length1 = 0;
  let length2 = 0;

  let current1 = list1;
  let current2 = list2;

  while (current1 !== null || current2 !== null) {
    if (current1 !== null) {
      length1++;
      current1 = current1.next;
    }

    if (current2 !== null) {
      length2++;
      current2 = current2.next;
    }
  }

  // if the end nodes are not the same, the lists do not intersect
  if (current1 !== current2) {
    return null;
  }

  current1 = list1;
  current2 = list2;
  if (length1 > length2) {
    let difference = length1 - length2;

    for (let i = 0; i < difference; i++) {
      current1 = current1.next;
    }
  } else if (length2 > length1) {
    let difference = length2 - length1;

    for (let i = 0; i < difference; i++) {
      current2 = current2.next;
    }
  }

  current1.print();
  current2.print();
  while (current1 !== null) {
    if (current1 === current2) {
      return current1;
    }

    current1 = current1.next;
    current2 = current2.next;
  }
}

const head1 = Node.createNodes([
  0, 1, 2, 3, 4, 5
]);

const head2 = new Node(7);
const second = new Node(8);
const third = new Node(9);
head2.next = second;
second.next = third;
third.next = head1.next;
// 7 8 9 1 2 3 4 5

const result = intersection(head1, head2)
assert(
  result === third.next
);
assert(
  intersection(head1, head2).value === 1
);
