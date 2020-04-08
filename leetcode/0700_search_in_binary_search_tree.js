function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
// recursive
function searchBST(root, val) {
  if (!root) return null;

  if (root.val === val) {
    return root;
  } else if (root.val < val) {
    return searchBST(root.right, val);
  } else if (root.val > val) {
    return searchBST(root.left, val);
  }
}

const four = new TreeNode(4);
const two = new TreeNode(2);
const seven = new TreeNode(7);
const one = new TreeNode(1);
const three = new TreeNode(3);
four.left = two;
four.right = seven;
two.left = one;
two.right = three;

let output = searchBST(four, 2);
console.log(output);

// iterative
function alternative(root, val) {
  if (!root) return null;

  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();

    if (!node) continue;
    if (node.val === val) return node;
    if (node.val < val) {
      stack.push(node.right);
    }
    if (node.val > val) {
      stack.push(node.left);
    }
  }

  return null;
}

output = alternative(four, 2);
console.log(output);