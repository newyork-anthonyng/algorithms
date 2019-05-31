function Node(value) {
  this.value = value;

  this.next = null;

  this.append = function(node) {
    this.next = node;
  }

  this.print = function() {
    let currentNode = this;
    let currentIndex = 0;

    while (currentNode !== null) {
      console.log(`${currentIndex}: ${currentNode.value}`);

      currentNode = currentNode.next;
      currentIndex++;
    }
  }
}

function createNodes(array) {
  let head = null;
  let end = null;

  for (let i = 0; i < array.length; i++) {
    const newNode = new Node(array[i]);

    if (head === null) {
      head = newNode;
      end = head;
    } else {
      end.next = newNode;
      end = end.next;
    }
  }

  return head;
}

module.exports = Node;
module.exports.createNodes = createNodes;
