class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  logAsArray() {
    let current = this.head;
    const ar = [];
    while (!!current) {
      ar.push(current.val);
      current = current.next;
    }
    console.log(ar);
  }

  push(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      let newNode = new Node(val);
      this.tail.next = newNode;
      this.tail = newNode;
      // this.tail = this.tail.next; //OR
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    else {
      if (this.length === 1) {
        // if (this.head === this.tail) { //OR
        const current = this.head;
        this.head = null;
        this.tail = null;
        this.length--;
        return current;
      }
      let current = this.head;
      let pre = this.head;
      // let pre = current; //OR
      while (!!current.next) {
        pre = current;
        current = current.next;
      }
      // let current = this.head.next; //OR //NOT RECOMMENDED
      // let pre = this.head;
      // while (!!current.next) {
      //   pre = current;
      //   current = current.next;
      // }
      pre.next = null;
      this.tail = pre;
      this.length--;
      return current;
    }
  }

  shift() {
    if (!this.head) return undefined;
    else {
      if (this.length === 1) {
        const current = this.head;
        this.head = null;
        this.tail = null;
        this.length--;
        return current;
      } else {
        const current = this.head;
        this.head = this.head.next;
        // this.head = current.next; //OR
        this.length--;
        return current;
      }
    }
  }
}

const sLL = new SinglyLinkedList();
console.log(sLL.push("hello"));
console.log(sLL.push("World"));
console.log(sLL.push("!!!"));
console.log(sLL.push("..."));

// console.log(sLL.pop());
// console.log(sLL.pop());
// console.log(sLL.pop());
// console.log(sLL.pop());
// console.log(sLL.pop());

// console.log(sLL.shift());
// console.log(sLL.shift());
// console.log(sLL.shift());
// console.log(sLL.shift());
// console.log(sLL.shift());

sLL.logAsArray();
console.log(sLL);
