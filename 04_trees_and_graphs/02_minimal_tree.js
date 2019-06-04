function QueueNode(value) {
  this.value = value;
  this.next = null;
}

function Queue() {
  let top = null;

  this.add = function(value) {
    const newNode = new QueueNode(value);

    newNode.next = top;
    top = newNode;
  }

  this.remove = function() {
    const result = top;

    if (result !== null) {
      top = result.next;
    }

    return result;
  }

  this.isEmpty = function() {
    return top === null;
  }
}

function printTree(node) {
  // holds items to print
  const array = [];

  const queue = new Queue();

  node.depth = 0;
  queue.add(node);

  while (!queue.isEmpty()) {
    const current = queue.remove().value;
    if (!array[current.depth]) {
      array[current.depth] = [];
    }
    array[current.depth].push(current);

    if (current.left) {
      current.left.depth = current.depth + 1;
      queue.add(current.left);
    }

    if (current.right) {
      current.right.depth = current.depth + 1;
      queue.add(current.right);
    }
  }

  for (let i = 0; i < array.length; i++) {
    console.log("***************");
    console.log(`Level ${i}`);
    for (let j = 0; j < array[i].length; j++) {
      console.log(`Value: ${array[i][j].value}`);
    }
  }
}

function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function createMinimalBst(array) {
  return _createMinimalBst(array, 0, array.length - 1);
}

function _createMinimalBst(array, startIndex, endIndex) {
  if (endIndex < startIndex) {
    return null;
  }

  const mid = parseInt((startIndex + endIndex) / 2);
  const newNode = new TreeNode(array[mid]);
  newNode.left = _createMinimalBst(array, startIndex, mid - 1);
  newNode.right = _createMinimalBst(array, mid + 1, endIndex);

  return newNode;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let node = createMinimalBst(array);
printTree(node);
