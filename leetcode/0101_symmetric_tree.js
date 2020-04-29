function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function isSymmetric(root) {
  const left = [];
  const right = [];

  left.push(root.left);
  right.push(root.right);

  while (left.length > 0) {
    const currentLeft = left.shift();
    const currentRight = right.shift();
    

    if (
      currentLeft === null && currentRight !== null ||
      currentRight === null && currentLeft !== null
    ) {
      return false;
    } else if (currentLeft === null && currentRight === null) {
      break;
    }
    console.log(`left: ${currentLeft.val}, right: ${currentRight.val}`);

    if (currentLeft.val !== currentRight.val) {
      return false;
    }

    left.push(currentLeft.left);
    left.push(currentLeft.right);

    right.push(currentRight.right);
    right.push(currentRight.left);
  }

  return true;
}

let one = new TreeNode(1);
let two = new TreeNode(2);
let twoP = new TreeNode(2);
let three = new TreeNode(3);
let threeP = new TreeNode(3);
let four = new TreeNode(4);
let fourP = new TreeNode(4);
one.left = two;
one.right = twoP;
two.left = three;
two.right = four;
twoP.left = fourP;
twoP.right = threeP;

let output = isSymmetric(one);
console.log(output);


function recursive(root) {
  function isMirror(node1, node2) {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;

    return (node1.val === node2.val) && isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
  }

  return isMirror(root.left, root.right);
}
