const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor () {
    this.first = 0;
    this.last = 0;
    this.queue = {};
    this.size = 0;
  }

  getUnderlyingList() {
    return this.queue[this.first];
  }

  enqueue(value) {
    this.queue[this.last] = new ListNode(value);
    if (this.size > 0) {
      this.queue[this.last - 1].next = this.queue[this.last];
    }
    this.last += 1;
    this.size++;
  }

  dequeue() {
    let deletedItem = this.queue[this.first];
    if (this.size === 0) return null;
    delete this.queue[this.first];
    this.first += 1;
    this.size--;
    return deletedItem.value;
  }
}

module.exports = {
  Queue
};
