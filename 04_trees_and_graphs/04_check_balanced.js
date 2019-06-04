function checkHeight(root) {
  if (root === null) {
    return -1;
  }

  const leftHeight = checkHeight(root.left);
  if (leftHeight === Number.MIN_SAFE_INTEGER) {
    return Number.MIN_SAFE_INTEGER;
  }

  const rightHeight = checkHeight(root.right);
  if (rightHeight === Number.MIN_SAFE_INTEGER) {
    return Number.MIN_SAFE_INTEGER;
  }

  const heightDifference = Math.abs(leftHeight - rightHeight);
  if (heightDifference > 1) {
    return Number.MIN_SAFE_INTEGER;
  } else {
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

function isBalanced(root) {
  return checkHeight(root) !== Number.MIN_SAFE_INTEGER;
}

function TreeNode(value) {
  this.value = value;

  this.left = null;
  this.right = null;
}

// Side note: How would you calculate the height of a tree
function getHeightOfRoot(root) {
  if (root === null) {
    return -1;
  }

  return Math.max(
    getHeightOfRoot(root.left),
    getHeightOfRoot(root.right)
  ) + 1;
}

const root = new TreeNode(1);
const first = new TreeNode(2);
const second = new TreeNode(3);
const third = new TreeNode(4);
const fourth = new TreeNode(5);
const fifth = new TreeNode(6);
const sixth = new TreeNode(7);

root.right = first;
first.right = second;
second.right = third;
third.right = fourth;
fourth.right = fifth;
fifth.right = sixth;

const height = getHeightOfRoot(root);
console.log(`height is ${height}`);
