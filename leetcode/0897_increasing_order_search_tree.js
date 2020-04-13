function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function increasingBST(root) {
  if (!root) return null;

  const queue = [];
  inorder(root, queue);

  let answer = new TreeNode(-1);
  let current = answer;

  while (queue.length > 0) {
    const newNumber = queue.shift();
    current.right = newNumber;
    current = current.right;
  }

  return answer.right;
}

function inorder(node, list) {
  if (node === null) return;

  inorder(node.left, list);
  list.push(node);
  inorder(node.right, list);
}

let five = new TreeNode(5);
let three = new TreeNode(3);
let two = new TreeNode(2);
let four = new TreeNode(4);
let one = new TreeNode(1);
let six = new TreeNode(6);
let eight = new TreeNode(8);
let seven = new TreeNode(7);
let nine = new TreeNode(9);

five.left = three;
five.right = six;
three.left = two;
three.right = four;
two.left = one;

six.right = eight;
eight.left = seven;
eight.right = nine;

let result = increasingBST(five);
console.log(result);

while (result) {
  console.log(result.val);
  result = result.right;
}