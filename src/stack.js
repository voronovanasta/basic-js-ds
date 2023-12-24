const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.size = 0;
    this.data = {};
  }
  push(element) {
    this.size += 1;
    this.data[this.size] = element;
  }

  pop() {
    let lastItem = this.data[this.size];
    delete this.data[this.size];
    this.size -= 1;
    return lastItem;
  }

  peek() {
    return this.data[this.size]
  }
}

module.exports = {
  Stack
};
