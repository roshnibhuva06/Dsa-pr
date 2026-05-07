class Stack {
  constructor() {
    this.items = [];
  }

  push(x) {
    this.items.push(x);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
}