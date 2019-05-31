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

module.exports = Node;
