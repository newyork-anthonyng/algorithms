function getIntersectionNode(headA, headB) {
  let first = headA;
  let second = headB;

  // finish traversing shortest list
  while (first && second) {
    if (first === second) {
      return first;
    }

    first = first.next;
    second = second.next;
  }

  // finish traversing longest list. count how much longer it is
  let counter = 0;
  if (first === null) {
    while (second) {
      counter++;
      second = second.next;
    }

    first = headA;
    second = headB;
    for (let i = 0; i < counter; i++) {
      second = second.next;
    }
  } else if (second === null) {
    while (first) {
      counter++;
      first = first.next;
    }

    first = headA;
    second = headB;
    for (let i = 0; i < counter; i++) {
      first = first.next;
    }
  }

  // both first and second should be at same lengths
  while (first && second) {
    if (first === second) {
      return first;
    }

    first = first.next;
    second = second.next;
  }

  return null;
}

function alternative(headA, headB) {
  if (headA === null || headB === null) return null;

  let pointerA = headA;
  let pointerB = headB;

  while (pointerA !== pointerB) {
    pointerA = pointerA.next;
    pointerB = pointerB.next;

    if (pointerA === pointerB) {
      return pointerA;
    }

    if (pointerA === null) {
      pointerA = headB;
    }

    if (pointerB === null) {
      pointerB = headA;
    }
  }

  return pointerA;
}
