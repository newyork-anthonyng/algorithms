function Node(val, children) {
  this.val = val;
  this.children = children;
}

// Recursive
function preorder(root) {
  if (!root) {
    return [];
  }

  let result = [];
  let children = root.children || [];

  result.push(root.val);
  for (let i = 0; i < children.length; i++) {
    result.push(...preorder(children[i]));
  }

  return result;
}

let five = new Node(5);
let six = new Node(6);
let three = new Node(3, [five, six]);
let two = new Node(2);
let four = new Node(4);
let one = new Node(1, [three, two, four]);

let output = preorder(one);
console.log(output);

// iterative
function alternative(root) {
  const result = [];
  const stack = [root];

  while (stack.length) {
    let current = stack.shift();
    if (!current) continue;

    result.push(current.val);

    if (!current.children) continue;

    for (let i = current.children.length - 1; i >= 0; i--) {
      stack.unshift(current.children[i]);
    }
  }

  return result;
}

output = alternative(one);
console.log(output);