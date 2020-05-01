function pathSum(root, sum) {
  if (!root) return 0;

  return (
    pathSumOnlyStart(root, sum) +
    pathSum(root.left, sum) +
    pathSum(root.right, sum)
  );
}

function pathSumOnlyStart(root, sum) {
  if (!root) return 0;

  // we've finished! we sum up to the target
  const self = root.val === sum ? 1 : 0;

  return (
    self +
    pathSumOnlyStart(root.left, sum - root.val) +
    pathSumOnlyStart(root.right, sum - root.val)
  )
}
