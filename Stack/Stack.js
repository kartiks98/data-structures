class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //Same as Sll unshift
  push(val) {
    if (!this.first) {
      this.first = new Node(val);
      this.last = this.first;
    } else {
      const newNode = new Node(val);
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this.size;
  }

  //Same as Sll shift
  pop() {
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

const stack = new Stack();
console.log(stack.push("hello"));
console.log(stack.push("World"));
console.log(stack.push("!!!"));
console.log(stack.push("..."));

// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop()); //Invalid Input

stack.logAsArray();
console.log(stack);

module.exports = Stack;
