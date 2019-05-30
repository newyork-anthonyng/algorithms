const assert = require("assert");
const Node = require("./linkedList.js");

/*
 * Time complexity: O(n)
 * Space complexity: O(n)
*/
function removeDups(head) {
  const frequencyHash = {};

  let currentNode = head;
  let previousNode = null;

  while (currentNode !== null) {
    if (frequencyHash[currentNode.value] === true) {
      previousNode.next = currentNode.next;
      currentNode = currentNode.next;
    } else {
      frequencyHash[currentNode.value] = true;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }
}

/*
 * To get space complexity of O(1), we can make multiple passes through the linked list
 * This would increase time complexity to O(n^2) possibly?
*/

let head = new Node(1);
let second = new Node(2);
let third = new Node(3);
let fourth = new Node(2);
let fifth = new Node(4);
let sixth = new Node(3);
head.append(second);
second.append(third);
third.append(fourth);
fourth.append(fifth);
fifth.append(sixth);

removeDups(head);

assert(head.next.next.next.value === 4);
assert(head.next.next.next.next === null);
