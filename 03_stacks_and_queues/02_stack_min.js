const assert = require("assert");

function StackNode(value, lastMin) {
  this.value = value;
  this.next = null;
  this.min = Math.min(value, lastMin);
}

// include a new "min" function to the stack.
// pop, push, and min should all run in O(1) time
function StackMin() {
  this.top = null;

  this.push = function(value) {
    const previousMin = this.top ? this.top.min : Infinity;

    const newNode = new StackNode(value, previousMin);

    if (this.top === null) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  this.pop = function() {
    if (this.top === null) {
      throw new Error("Stack is empty");
    }

    const result = this.top;
    this.top = this.top.next;

    return result;
  }

  this.min = function() {
    if (this.top === null) {
      throw new Error("Stack is empty");
    }

    return this.top.min;
  }

  this.isEmpty = function() {
    return this.top === null;
  }

  this.peek = function() {
    if (this.top === null) {
      throw new Error("Stack is empty");
    }

    return this.top;
  }
}

const stack = new StackMin();
stack.push(5);
stack.push(3);
assert(stack.min() === 3);
stack.pop();
assert(stack.min() === 5);
