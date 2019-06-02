function Stack() {
  let top = null;

  this.pop = function() {
    if (top === null) {
      throw new Error("Empty stack");
    }

    const poppedNode = top;
    top = top.next;

    return poppedNode;
  }

  this.push = function(data) {
    const newNode = new StackNode(data);

    newNode.next = top;
    top = newNode;
  }

  this.peek = function() {
    if (top === null) {
      throw new Error("Empty stack");
    }
    return top;
  }

  this.isEmpty = function() {
    return top === null;
  }
}

function StackNode(value) {
  this.value = value;
  this.next = null;
}

module.exports = Stack;
