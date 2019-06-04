const assert = require("assert");

function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function validateBst(root) {
  if (root === null) {
    return true;
  }

  const left = root.left;
  if (left && left.value > root.value) {
    return false;
  }
  const right = root.right;
  if (right && right.value <= root.value) {
    return false;
  }

  return validateBst(root.left) && validateBst(root.right);
}

const root = new TreeNode(4);
const first = new TreeNode(2);
const second = new TreeNode(5);
const third = new TreeNode(1);
const fourth = new TreeNode(3);
const fifth = new TreeNode(6);

root.left = first;
root.right = second;

first.left = third;

second.left = fourth;
second.right = fifth;

assert(validateBst(root) === true);

const sixth = new TreeNode(100);
fifth.left = sixth;
assert(validateBst(root) === false);
