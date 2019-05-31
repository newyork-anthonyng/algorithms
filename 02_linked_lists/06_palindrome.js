const assert = require("assert");
const Node = require("./linkedList");

function isPalindrome(node) {
  let reverse = null;

  // create another linkedlist based on the current one, but reversed
  let current = node;
  while (current !== null) {
    // insert new node before others
    const newNode = new Node(current.value);
    newNode.next = reverse;
    reverse = newNode;

    current = current.next;
  }

  let isPalindrome = true;
  current = node;

  while (current !== null && isPalindrome === true) {
    if (current.value !== reverse.value) {
      isPalindrome = false;
    }

    current = current.next;
    reverse = reverse.next;
  }

  return isPalindrome;
}

let head = Node.createNodes([
  "r", "a", "c", "e", "c", "a", "r"
]);

assert(isPalindrome(head) === true);

head = Node.createNodes(["d", "o", "g"]);
assert(isPalindrome(head) === false);
