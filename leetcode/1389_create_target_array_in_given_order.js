function createTargetArray(nums, index) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    const position = index[i];

    result.splice(position, 0, number);
  }

  return result;
}

let nums = [0, 1, 2, 3, 4];
let index = [0, 1, 2, 2, 1];
let result = createTargetArray(nums, index);
console.log(result);

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function alternateAnswer(nums, index) {
  const resultNode = new ListNode(-1);

  for (let i = 0; i < nums.length; i++) {
    const currentNode = new ListNode(nums[i]);

    let current = resultNode;
    let position = index[i];
    while (position > 0) {
      current = current.next;
      position--;
    }

    const previousNode = current.next;
    current.next = currentNode;
    currentNode.next = previousNode;
  }

  const answer = [];
  let current = resultNode.next;
  while (current !== null) {
    answer.push(current.val);
    current = current.next;
  }

  return answer;
}

function printList(list) {
  let current = list;

  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
}

result = alternateAnswer(nums, index);
console.log(result);