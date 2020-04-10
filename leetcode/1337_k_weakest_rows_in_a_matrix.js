function ListNode(index, val) {
  this.val = val;
  this.index = index;

  this.next = null;
}

function kWeakestRows(mat, k) {
  let head = new ListNode(-1, -1);

  for (let i = 0; i < mat.length; i++) {
    const currentRow = mat[i];
    const newNode = new ListNode(i, countSoldiers(currentRow));

    let current = head;
    while (current.next !== null && newNode.val >= current.next.val) {
      current = current.next;
    }

    let oldNext = current.next;
    current.next = newNode;
    newNode.next = oldNext;
  }

  let result = [];
  // let current = head.next;
  for (let i = 0, current = head.next; i < k; i++, current = current.next) {
    result.push(current.index);
  }

  return result;
}

function countSoldiers(a) {
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1) {
      count++;
    } else {
      break;
    }
  }

  return count;
}

// let input = 
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]];
// let output = kWeakestRows(input, 3);
// console.log(output);

input = [[1,0,0],[1,1,1],[0,0,0],[1,1,1],[1,1,0],[1,0,0]];
output = kWeakestRows(input, 5);
console.log(output);
console.log([2,0,5,4,1])


input = [[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]];
output = kWeakestRows(input, 3);
console.log('********');
console.log(output);
console.log([2,0,3]);