function Node(val, children) {
  this.val = val;
  this.children= children;
}

function maxDepth(root) {
  // console.log('**********');
  // console.log(root);
  if (!root) {
    // console.log('returning 0');
    return 0;
  }

  let maxLength = 0;
  for (let i = 0; i < root.children.length; i++) {
    // console.log('i', i);
    const childDepth = maxDepth(root.children[i]);
    // console.log('childDepth', childDepth);
    maxLength = Math.max(maxLength, childDepth);
  }

  return maxLength + 1;
}

const five = new Node(5, []);
const six = new Node(6, [])
const three = new Node(3, [five, six]);
const two = new Node(2, []);
const four = new Node(4, []);
const one = new Node(1, [three, two, four]);

let output = maxDepth(one);
console.log(output);