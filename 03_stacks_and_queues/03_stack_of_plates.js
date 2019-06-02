const assert = require("assert");

function StackNode(value, previousHeight) {
  this.value = value;
  this.next = null;
  this.height = previousHeight + 1;
}

/*
 * When a stack is bigger than capacity, create a new substack
*/
function SetOfStacks(capacity) {
  let stacksArray = [];

  this.push = function(value) {
    const targetStackIndex = stacksArray.length === 0 ? 0 : stacksArray.length - 1;

    const isNewStack = stacksArray[targetStackIndex] === undefined;

    if (isNewStack) {
      const newNode = new StackNode(value, 0);
      stacksArray[targetStackIndex] = newNode;
    } else {
      // check if you're about to topple over
      const oldStackTop = stacksArray[targetStackIndex];
      if (oldStackTop.height >= capacity) {
        const newNode = new StackNode(value, 0);
        stacksArray[targetStackIndex + 1] = newNode;
      } else {
        const newNode = new StackNode(value, oldStackTop.height);

        newNode.next = oldStackTop;
        stacksArray[targetStackIndex] = newNode;
      }
    }
  }

  this.pop = function() {
    const targetStackIndex = stacksArray.length === 0 ? 0 : stacksArray.length - 1;

    const result = stacksArray[targetStackIndex];
    if (!result) {
      throw new Error("Stack is empty");
    }

    stacksArray[targetStackIndex] = result.next;

    if (stacksArray[targetStackIndex] === null) {
      stacksArray.pop();
    }

    return result;
  }

  this.popAt = function(index) {
    if (!stacksArray[index]) {
      throw new Error(`Stack ${index} is empty`);
    }

    const result = stacksArray[index];
    stacksArray[index] = result.next;

    // handle when popAt clears out an entire stack
    if (stacksArray[index] === null) {
      stacksArray.splice(index, 1);;
    }

    return result;
  }

  this.isEmpty = function() {
    const targetStackIndex = this.getTargetStackIndex();

    return stacksArray[0] === undefined;
  }

  this.getTargetStackIndex = function() {
    const targetStackIndex = stacksArray.length === 0 ? 0 : stacksArray.length - 1;
    return targetStackIndex;
  }

  this.peek = function() {
    const targetStackIndex = stacksArray.length === 0 ? 0 : stacksArray.length - 1;
    return stacksArray[targetStackIndex];
  }

  this.print = function() {
    console.log(stacksArray);
  }
}

const stack = new SetOfStacks(5);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
assert(
  stack.pop().value === 7
);
assert(
  stack.pop().value === 6
);
assert(
  stack.pop().value === 5
);
assert(
  stack.pop().value === 4
);
assert(stack.isEmpty() === false);
stack.pop();
stack.pop();
stack.pop();
assert(stack.isEmpty() === true);

const stack2 = new SetOfStacks(2);
stack2.push(1);
stack2.push(2);
stack2.push(3);
stack2.push(4);
stack2.push(5);
stack2.push(6);
stack2.push(7);
stack2.push(8);
assert(
  stack2.popAt(1).value === 4
);
assert(
  stack2.popAt(1).value === 3
);
assert(stack2.pop().value === 8);
assert(stack2.pop().value === 7);
assert(stack2.pop().value === 6);
assert(stack2.pop().value === 5);
assert(stack2.pop().value === 2);
assert(stack2.pop().value === 1);
