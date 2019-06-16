// https://leetcode.com/problems/merge-two-binary-trees/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function mergeTrees(t1, t2) {
  // base case
  if (t1 === null && t2 === null) {
    return null;
  }

  // if only one of the nodes exist, then return that node
  if (t1 === null) {
    return t2;
  }

  if (t2 === null) {
    return t1;
  }

  // if both nodes exist, add them
  const newNode = new TreeNode(t1.val + t2.val);
  newNode.left = mergeTrees(t1.left, t2.left);
  newNode.right = mergeTrees(t1.right, t2.right);

  return newNode;
}

let firstHead = new TreeNode(1);
let second = new TreeNode(3);
let third = new TreeNode(2);
let fourth = new TreeNode(5);
firstHead.left = second;
firstHead.right = third;
second.left = fourth;

let secondHead = new TreeNode(2);
let second2 = new TreeNode(1);
let third2 = new TreeNode(3);
let fourth2 = new TreeNode(4);
let fifth2 = new TreeNode(7);
secondHead.left = second2;
secondHead.right = third2;
second2.right = fourth2;
third2.right = fifth2;

let result = mergeTrees(firstHead, secondHead);
console.log(result);
