function ListNode(x) {
  this.value = x;
  this.next = null;
}

function removeKFromList(l, k) {
  const dummy = new ListNode(0);
  dummy.next = l;

  let current = dummy;
  while (current.next !== null) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return dummy.next;
}

module.exports = removeKFromList;
