function Queue() {
  let top = null;

  this.add = function(value) {
    const newNode = new QueueNode(value);

    newNode.next = top;
    top = newNode;
  };

  this.remove = function() {
    const result = top;

    if (result !== null) {
      top = result.next;
    }

    return result;
  }

  this.isEmpty = function() {
    return top === null;
  }
}

function QueueNode(value) {
  this.value = value;
  this.next = null;
}

module.exports = Queue;
