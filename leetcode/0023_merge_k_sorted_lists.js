function ListNode(val) {
  this.val = val;
  this.next = null;
}

function mergeKLists(lists) {
  let result = null;
  for (let i = 0; i < lists.length; i++) {
    if (result === null) {
      result = lists[i];
    } else {
      if (lists[i].val < result.val) {
        result = lists[i];
      }
    }
  }

  let current = result;
  while (!isArrayNull(lists)) {
    let minObj = null;
    for (let i = 0; i < lists.length; i++) {
      const currentItem = lists[i];
      if (currentItem === null) continue;

      if (minObj === null) {
        minObj = {
          index: i,
          node: lists[i]
        };
      } else {
        if (currentItem.val < minObj.node.val) {
          minObj = {
            index: i,
            node: lists[i]
          };
        }
      }
    }
    lists[minObj.index] = lists[minObj.index].next;
    current.next = minObj.node;
    current = current.next;
  }

  return result;
}

function isArrayNull(array) {
  return array.every(a => a === null);
}

function createListNodes(arr) {
  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

function printList(head) {
  let current = head;

  while (current) {
    console.log(current.val);
    current = current.next;
  }
}

let first = createListNodes([1, 4, 5]);
let second = createListNodes([1, 3, 4]);
let third = createListNodes([2, 6]);

let result = mergeKLists([first, second, third]);
printList(result);