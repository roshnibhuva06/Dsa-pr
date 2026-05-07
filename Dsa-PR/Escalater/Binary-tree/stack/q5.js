class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class StackLL {
  constructor() {
    this.top = null;
  }
  push(val) {
    const newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop() {
    if (!this.top) return null;
    const val = this.top.val;
    this.top = this.top.next;
    return val;
  }
}