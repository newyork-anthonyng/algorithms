const Queue = require("./queue.js");

function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  let head = null;

  this.add = function(value) {
    const newNode = new LinkedListNode(value);
    if (head === null) {
      head = newNode;
    } else {
      let current = head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  this.print = function() {
    let current = head;

    while(current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

function listOfDepths(root) {
  if (!root) return [];

  const result = [];
  const queue = new Queue();
  root.depth = 0;
  queue.add(root);

  while (!queue.isEmpty()) {
    const current = queue.remove().value;
    const currentDepth = current.depth;

    if (!result[currentDepth]) {
      result[currentDepth] = new LinkedList();
    }

    result[currentDepth].add(current);

    if (current.left !== null) {
      current.left.depth = currentDepth + 1;
      queue.add(current.left);
    }

    if (current.right !== null) {
      current.right.depth = currentDepth + 1;
      queue.add(current.right);
    }
  }

  return result;
}

const root = new TreeNode(1);
const first = new TreeNode(2);
const second = new TreeNode(3);
const third = new TreeNode(4);
const fourth = new TreeNode(5);
const fifth = new TreeNode(6);
const sixth = new TreeNode(7);

root.left = first;
root.right = second;

first.left = third;
first.right = fourth;

second.left = fifth;
second.right = sixth;

const result = listOfDepths(root);
result.forEach((list, index) => {
  console.log("****************");
  console.log(`depth: ${index}`);
  list.print();
});
