function Node(value) {
  this.value = value;

  this.next = null;

  this.append = function(node) {
    this.next = node;
  }
}

module.exports = Node;
