class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  peek() {
    if (this.items.length === 0) return undefined;
    return this.items[this.items.length - 1];
  }

  pop() {
    return this.items.pop();
  }
}

module.exports = Stack;
