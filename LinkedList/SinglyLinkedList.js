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
}

const sLL = new SinglyLinkedList();
sLL.push("hello");
sLL.push("World");
sLL.push("!!!");
sLL.logAsArray();
console.log(sLL);
