function inorderTraversal(root) {
  if (root === null) {
    return [];
  }

  const left = inorderTraversal(root.left);
  const right = inorderTraversal(root.right);

  return [
    ...left,
    root.val,
    ...right
  ]
}

function iterativeSolution(root) {
  const stack = [];
  const result = [];

  root && stack.push(root);

  while (stack.length > 0) {
    const item = stack.pop();
    if (item.left) {
      stack.push(item);
      stack.push(item.left);
      item.left = null;
    } else {
      result.push(item.val);
      item.right && stack.push(item.right);
    }
  }

  return result;
}
