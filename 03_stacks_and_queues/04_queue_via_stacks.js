const assert = require("assert");

function StackNode(value) {
  this.value = value;
  this.next = null;
}

function Stack() {
  let head = null;

  this.push = function(value) {
    const newNode = new StackNode(value);

    newNode.next = head;
    head = newNode;
  }

  this.pop = function() {
    const result = head;

    if (result !== null) {
      head = result.next;
    }

    return result;
  }

  this.isEmpty = function() {
    return head === null;
  }

  this.peek = function() {
    return head;
  }
}

function QueueViaStacks() {
  const stackOldest = new Stack();
  const stackNewest = new Stack();

  this.add = function(value) {
    stackNewest.push(value);
  }

  this.remove = function() {
    this.shiftStack();
    return stackOldest.pop();
  }

  this.peek = function() {
    this.shiftStack();
    return stackOldest.peek();
  }

  this.shiftStack = function() {
    if (stackOldest.isEmpty()) {
      while (!stackNewest.isEmpty()) {
        stackOldest.push(stackNewest.pop().value);
      }
    }
  }
}

const queue = new QueueViaStacks();
queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);

assert(
  queue.peek().value === 1
);

assert(
  queue.remove().value === 1
);
assert(
  queue.remove().value === 2
);
assert(
  queue.remove().value === 3
);
assert(
  queue.remove().value === 4
);

