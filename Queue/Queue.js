class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //Same as Sll push
  enqueue(val) {
    if (!this.first) {
      this.first = new Node(val);
      this.last = this.first;
    } else {
      const newNode = new Node(val);
      this.last.next = newNode;
      this.last = newNode;
      // this.last = this.last.next; //OR
    }
    this.size++;
    return this.size;
  }

  //Same as Sll shift
  dequeue() {
    if (!this.first) return "Invalid Input";
    if (this.size === 1) {
      const current = this.first;
      this.first = null;
      this.last = null;
      this.size--;
      return current.val;
    }
    const current = this.first;
    this.first = this.first.next;
    // this.first = current.next; //OR
    this.size--;
    return current.val;
  }

  logAsArray() {
    let current = this.first;
    const ar = [];
    while (!!current) {
      ar.push(current.val);
      current = current.next;
    }
    console.log(ar);
  }
}

const queue = new Queue();
console.log(queue.enqueue("hello"));
console.log(queue.enqueue("World"));
console.log(queue.enqueue("!!!"));
console.log(queue.enqueue("..."));

// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue()); //Invalid Input

queue.logAsArray();
console.log(queue);

module.exports = Queue;
