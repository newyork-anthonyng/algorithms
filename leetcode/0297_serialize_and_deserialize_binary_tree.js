function TreeNode(value) {
  this.val = value;

  this.left = this.right = null;
}

let first = new TreeNode(1);
let second = new TreeNode(2);
let third = new TreeNode(3);
let fourth = new TreeNode(4);
let fifth = new TreeNode(5);

first.left = second;
first.right = third;
third.left = fourth;
third.right = fifth;

let input = first;
console.assert(
  serialize(input) === '1,2,3,null,null,4,5,null,null,null,null',
  'first'
);
console.assert(
  serialize(null) === 'null',
  'second'
);

function serialize(root) {
  let result = [];

  const queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    const node = queue.shift();

    if (node === null) {
      result.push('null');
    } else {
      result.push(node.val);

      queue.push(node.left);
      queue.push(node.right);
    }
  }

  return String(result);
}

input = '1,2,3,null,null,4,5,null,null,null,null';
console.log(input, deserialize(input));
console.log("****************");
input = 'null';
console.log(input, deserialize(input));
console.log("****************");
input = '1,2,3,4,5,6,7,null,null,null,null,null,null,null,null';
console.log(input, deserialize(input));

function deserialize(data) {
  const array = data.split(',');

  let head = null;

  const leaves = [];
  const firstTreeNode = convertStringToTreeNode(array.shift());
  leaves.push(firstTreeNode);

  while (leaves.length !== 0) {
    const element = leaves.shift();
    if (element === null) {
      continue;
    }

    if (!head) {
      head = element;
    }
    const leftTreeNode = convertStringToTreeNode(array.shift());
    const rightTreeNode = convertStringToTreeNode(array.shift());

    element.left = leftTreeNode;
    element.right = rightTreeNode;

    leaves.push(leftTreeNode);
    leaves.push(rightTreeNode);
  }

  function convertStringToTreeNode(string) {
    return string === 'null' ? null : new TreeNode(string);
  }

  return head;
}
