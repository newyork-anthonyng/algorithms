// find the "next" node ("in-order" successor) of a given node in a binary search tree
// in-order traversal does left node, current node, right node
function successor(node) {
  if (node.right) {
    // return the left-most node in the right child
    let leftMostNode = node.right;
    while (leftMostNode.left !== null) {
      leftMostNode = leftMostNode.left;
    }
    return leftMostNode;
  }

  const q = node;
  const x = q.parent;
  // look up when the parent is on left side
  while (x !== null && x.left !== q) {
    q = x;
    x = q.parent;
  }

  return x;
}
