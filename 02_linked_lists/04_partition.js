const Node = require("./linkedList.js");
const assert = require("assert");

function partition(head, value) {
  // Create two new linked lists
  // "before" will hold all nodes less than partition value
  // "after" will hold all nodes greater than or equal to partition value
  let beforeStart;
  let beforeEnd;
  let afterStart;
  let afterEnd;

  let current = head;

  while (current !== null) {
    if (current.value < value) {
      // add node to "before"
      if (!beforeStart) {
        beforeStart = current;
        beforeEnd = beforeStart;
      } else {
        beforeEnd.next = current;
        beforeEnd = beforeEnd.next;
      }
    } else {
      // add node to "after"
      if (!afterStart) {
        afterStart = current;
        afterEnd = afterStart;
      } else {
        afterEnd.next = current;
        afterEnd = afterEnd.next;
      }
    }

    current = current.next;
  }

  beforeEnd.next = afterStart;
  afterEnd.next = null;

  return beforeStart;
}

let head = new Node(5);
let second = new Node(10);
let third = new Node(2);
let fourth = new Node(7);
let fifth = new Node(1);
let sixth = new Node(3);
head.append(second);
second.append(third);
third.append(fourth);
fourth.append(fifth);
fifth.append(sixth);

const newHead = partition(head, 5);
newHead.print();
