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
        this.head = null;
        this.tail = null;
        this.length--;
        return this.head;
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
}

const sLL = new SinglyLinkedList();
sLL.push("hello");
sLL.push("World");
sLL.push("!!!");
sLL.pop();
sLL.pop();
sLL.pop();

sLL.logAsArray();
console.log(sLL);
