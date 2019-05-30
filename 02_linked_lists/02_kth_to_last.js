const assert = require("assert");
const Node = require("./linkedList.js");

function kthToLast(head, targetIndex) {
  let fastIndex = 0; // keeps track of the faster node

  let firstNode = head;
  let secondNode = head;

  // firstNode will be n spaces ahead of secondNode, where n = targetIndex
  while (firstNode !== null && fastIndex <= targetIndex) {
    firstNode = firstNode.next;
    fastIndex++;
  }

  while (firstNode !== null) {
    firstNode = firstNode.next;
    secondNode = secondNode.next;
  }

  return secondNode;
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

assert(kthToLast(head, 3) === fourth);
