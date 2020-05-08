function isPalindrome(head) {
  let first = head;
  while (first && first.next) {
    first.next.prev = first;
    first = first.next;
  }

  let second = head;
  while (first && second) {
    if (first.val !== second.val) {
      return false;
    }
    first = first.prev;
    second= second.next;
  }

  return true;
}
