function Node(val, children) {
  this.val = val;
  this.children = children;
}

// Recursive
function postorder(root) {
  if (!root) {
    return [];
  }

  let result = [];
  let children = root.children || [];

  for (let i = 0; i < children.length; i++) {
    result.push(...postorder(children[i]));
  }

  result.push(root.val);

  return result;
}

let five = new Node(5);
let six = new Node(6);
let three = new Node(3, [five, six]);
let two = new Node(2);
let four = new Node(4);
let one = new Node(1, [three, two, four]);

let output = postorder(one);
console.log(output);

// Iterative
function alternative(root) {
  const result = [];
  const stack = [root];

  while (stack.length) {
    let current = stack.pop();
    if (!current) continue;

    result.unshift(current.val);

    if (!current.children) continue;

    for (let i = 0; i < current.children.length; i++) {
      stack.push(current.children[i]);
    }
  }

  return result;
}

output = alternative(one);
console.log(output);