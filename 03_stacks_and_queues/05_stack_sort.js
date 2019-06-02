function StackNode(value) {
  this.value = value;
  this.next = null;
}

function Stack() {
  let top = null;

  this.push = function(value) {
    const newNode = new StackNode(value);

    newNode.next = top;
    top = newNode;
  }

  this.pop = function() {
    const result = top;

    if (result !== null) {
      top = top.next;
    }

    return result;
  }

  this.isEmpty = function() {
    return top === null;
  }

  this.peek = function() {
    return top;
  }

  this.print = function() {
    let current = top;

    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

function stackSort(stack) {
  let sortedStack = new Stack();

  while (!stack.isEmpty()) {
    const currentNode = stack.pop();

    while (
      sortedStack.peek() &&
      currentNode.value < sortedStack.peek().value
    ) {
      // stack.push(currentNode.pop());
      stack.push(sortedStack.pop().value);
    }

    sortedStack.push(currentNode.value);
  }

  while (!sortedStack.isEmpty()) {
    stack.push(sortedStack.pop().value);
  }
}

const stack = new Stack();
stack.push(3);
stack.push(2);
stack.push(10);
stack.push(5);

stackSort(stack);
stack.print();
