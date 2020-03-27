function ListNode(val) {
  this.val = val;
  this.next = null;
}

function mergeTwoLists(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  const curr = new ListNode(0);
  let t = curr;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      t.next = l1;
      l1 = l1.next;
    } else {
      t.next = l2;
      l2 = l2.next;
    }

    t = t.next;
  }

  t.next = l1 || l2;

  return curr.next;
}

function mergeKLists(lists) {
  if (!lists || !lists.length) return null;

  return divideAndConquer(lists, 0, lists.length - 1);

  function divideAndConquer(lists, start, end) {
    if (start === end) return lists[start];

    const mid = Math.floor((start + end) / 2);
    const left = divideAndConquer(lists, start, mid);
    const right = divideAndConquer(lists, mid + 1, end);

    return mergeTwoLists(left, right);
  }
}

function createLists(arr) {
  let result = new ListNode(arr[0]);
  let current = result;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return result;
}

function printLists(list) {
  let current = list;

  while (current) {
    console.log(current.val);
    current = current.next;
  }
}

let first = createLists([1, 4, 5]);
let second = createLists([1, 3, 4]);
let third = createLists([2, 6]);
let result = mergeKLists([first, second, third]);
printLists(result);