function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function isUnivalTree(root) {
  return applesauce(root, root.val);
}

function applesauce(node, value) {
  if (!node) return true;

  if (node.val !== value) return false;

  return applesauce(node.left, value) && applesauce(node.right, value);
}

let first = new TreeNode(1);
let second = new TreeNode(1);
let third = new TreeNode(1);
let fourth = new TreeNode(1);
let fifth = new TreeNode(1);
let sixth = new TreeNode(1);
first.left = second;
first.right = third;
third.right = sixth;
second.left = fourth;
second.right = fifth;

let output = isUnivalTree(first);
console.log(output);