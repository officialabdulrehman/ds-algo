class LinkedList {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const main = () => {};

const list1 = new LinkedList(
  0,
  new LinkedList(
    2,
    new LinkedList(4, new LinkedList(6, new LinkedList(8, null)))
  )
);

const list2 = new LinkedList(
  1,
  new LinkedList(
    3,
    new LinkedList(5, new LinkedList(7, new LinkedList(9, null)))
  )
);

main();
