function ListNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function diameterOfBinaryTree(root) {
  let height = 1;
  dfs(root);
  return height - 1;

  function dfs(node) {
    if (node === null) return 0;


    let left = dfs(node.left);
    let right = dfs(node.right);
    height = Math.max(height, left + right + 1);

    return Math.max(left, right) + 1;
  }
}

let one = new ListNode(1);
let two = new ListNode(2);
let three = new ListNode(3);
let four = new ListNode(4);
let five = new ListNode(5);
one.left = two;
one.right = three;
two.left = four;
two.right = five;

let output = diameterOfBinaryTree(one);
console.log(output);
