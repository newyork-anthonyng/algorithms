// https://leetcode.com/problems/range-sum-of-bst/
const assert = require("assert");

function TreeNode(val) {
  this.val = val;

  this.left = this.right = null;
}

function rangeSumBST(root, L, R) {
  if (root === null) {
    return 0;
  } else {
    const isValueInRange = root.val >= L && root.val <= R;
    const currentValue = isValueInRange ? root.val : 0;

    return currentValue + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
  }
}

const root = new TreeNode(10);
const second = new TreeNode(5);
const third = new TreeNode(15);
const fourth = new TreeNode(3);
const fifth = new TreeNode(7);
const sixth = new TreeNode(18);

root.left = second;
root.right = third;

second.left = fourth;
second.right = fifth;

third.right = sixth;

const result = rangeSumBST(root, 7, 15);
assert(result === 32);
