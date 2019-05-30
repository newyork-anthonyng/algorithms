const assert = require("assert");
const Node = require("./linkedList.js");

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
*/
function deleteMiddleNode(node) {
  // the current node has the same value as the next value
  let currentNode = node;

  while (currentNode !== null) {
    currentNode.value = currentNode.next.value;

    if (currentNode.next.next === null) {
      currentNode.next = null;
    }
    currentNode = currentNode.next;
  }
}

let head = new Node(1);
let second = new Node(2);
let third = new Node(3);
let fourth = new Node(2);
let fifth = new Node(4);
let sixth = new Node(3);
let seventh = new Node(7);
head.append(second);
second.append(third);
third.append(fourth);
fourth.append(fifth);
fifth.append(sixth);
sixth.append(seventh);

deleteMiddleNode(fourth);
assert(
  head.next.next.next = fifth
);
assert(
  head.next.next.next.next = sixth
);
assert(
  head.next.next.next.next.next = seventh
);
