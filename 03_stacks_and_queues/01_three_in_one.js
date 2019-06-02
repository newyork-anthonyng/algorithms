const assert = require("assert");

function ThreeInOne() {
  // array will hold three stacks. each stack will hold 20 items
  const array = new Array(60);
  this.array = array;

  const STACK_SIZE = 20;
  let firstStackIndex = 0;
  let secondStackIndex = firstStackIndex + STACK_SIZE;
  let thirdStackIndex = secondStackIndex + STACK_SIZE;

  let firstStackEndIndex = firstStackIndex;
  let secondStackEndIndex = secondStackIndex;
  let thirdStackEndIndex = thirdStackIndex;

  this.peek = function(stackNumber) {
    const stackNumberIndex = stackNumber - 1;
    let result;

    if (stackNumberIndex === 0) {
      result = array[firstStackEndIndex - 1];
    } else if (stackNumberIndex === 1) {
      result = array[secondStackEndIndex - 1];
    } else if (stackNumberIndex === 2) {
      result = array[thirdStackEndIndex = 1];
    }

    if (result === undefined) {
      throw new Error(`No elements inside stack ${stackNumber}`);
    }
    return result;
  }

  this.isEmpty = function(stackNumber) {
    const stackNumberIndex = stackNumber - 1;

    if (stackNumberIndex === 0) {
      return array[firstStackIndex] === undefined;
    } else if (stackNumberIndex === 1) {
      return array[secondStackIndex] === undefined;
    } else if (stackNumberIndex === 2) {
      return array[thirdStackIndex] === undefined;
    }
  }

  this.pop = function(stackNumber) {
    const stackNumberIndex = stackNumber - 1;

    if (stackNumberIndex === 0) {
      // check if there are any items in the stack
      if (firstStackEndIndex <= firstStackIndex) {
        throw new Error("No items inside stack 1");
      }
      const result = array[firstStackEndIndex - 1];
      array[firstStackEndIndex - 1] = undefined;
      firstStackEndIndex--;
      return result;
    } else if (stackNumberIndex === 1) {
      if (secondStackEndIndex <= secondStackIndex) {
        throw new Error("No items inside stack 2");
      }
      const result = array[secondStackEndIndex - 1];
      array[secondStackEndIndex - 1] = undefined;
      secondStackEndIndex--;
      return result;
    } else if (stackNumberIndex === 2) {
      if (thirdStackEndIndex <= thirdStackIndex) {
        throw new Error("No items inside stack 3");
      }
      const result = array[thirdStackEndIndex - 1];
      array[thirdStackEndIndex - 1] = undefined;
      thirdStackEndIndex--;
      return result;
    }
  }

  this.push = function(stackNumber, data) {
    const stackNumberIndex = stackNumber - 1;
    let insertionIndex;
    switch (stackNumberIndex) {
      case 0:
        if (firstStackEndIndex >= secondStackIndex) {
          throw new Error("First stack is full");
        }
        insertionIndex = firstStackEndIndex;
        firstStackEndIndex++;
        break;
      case 1:
        if (secondStackEndIndex >= thirdStackIndex) {
          throw new Error("Second stack is full");
        }
        insertionIndex = secondStackEndIndex;
        secondStackEndIndex++;
        break;
      case 2:
        if (thirdStackEndIndex >= array.length) {
          throw new Error("Third stack is full");
        }
        insertionIndex = thirdStackEndIndex;
        thirdStackEndIndex++;
        break;
      default:
        throw new Error("Invalid stack number");
    }

    array[insertionIndex] = data;
  }
}

const stack = new ThreeInOne();
// push the number "2" into the first stack
stack.push(1, 1);
stack.push(1, 2);
stack.push(1, 3);
assert(stack.pop(1) === 3);
assert(stack.pop(1) === 2);
assert(stack.peek(1) === 1);
assert(stack.isEmpty(1) === false);
assert(stack.pop(1) === 1);
assert(stack.isEmpty(1) === true);

stack.push(2, 4);
stack.push(2, 5);
stack.push(2, 6);
assert(stack.pop(2) === 6);

stack.push(3, 7);
stack.push(3, 8);
stack.push(3, 9);
assert(stack.pop(3) === 9);


