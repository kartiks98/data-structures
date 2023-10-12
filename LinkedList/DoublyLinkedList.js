class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      const newNode = new Node(val);
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return "Invalid Input";
    if (this.length === 1) {
      // if (this.head === this.tail) { //OR
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return removedNode;
    }
    const removedNode = this.tail;
    removedNode.prev.next = null;
    this.tail = removedNode.prev;
    // this.tail.prev.next = null; //OR
    // this.tail = this.tail.prev;
    this.length--;
    return removedNode;
  }

  shift() {
    if (!this.head) return "Invalid Input";
    if (this.length === 1) {
      const current = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return current;
    }
    const removedNode = this.head;
    this.head = removedNode.next;
    // this.head = this.head.next; //OR
    this.head.prev = null;
    this.length--;
    return removedNode;
  }

  unshift(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      const newNode = new Node(val);
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //Same as Sll get
  get(ind) {
    if (ind < 0 || ind > this.length - 1) return "Invalid Input";
    let currentInd = 0;
    let current = this.head;
    while (currentInd !== ind) {
      currentInd++;
      current = current.next;
    }
    return current;
  }

  //Same as Sll set
  set(ind, val) {
    const selectedNode = this.get(ind);
    if (selectedNode === "Invalid Input") return selectedNode;
    selectedNode.val = val;
    return this;
  }

  insert(ind, val) {}

  remove(ind) {}

  reverseDLL() {}
}

const dLL = new DoublyLinkedList();
console.log(dLL.push("hello"));
console.log(dLL.push("World"));
console.log(dLL.push("!!!"));
console.log(dLL.push("..."));

// console.log(dLL.pop());
// console.log(dLL.pop());
// console.log(dLL.pop());
// console.log(dLL.pop());
// console.log(dLL.pop()); //Invalid Input

// console.log(dLL.shift());
// console.log(dLL.shift());
// console.log(dLL.shift());
// console.log(dLL.shift());
// console.log(dLL.shift()); //Invalid Input

// console.log(dLL.unshift("hii"));
// console.log(dLL.unshift("Worldz"));
// console.log(dLL.unshift("!"));
// console.log(dLL.unshift("."));

// console.log(dLL.get(0));
// console.log(dLL.get(1));
// console.log(dLL.get(2));
// console.log(dLL.get(3));
// console.log(dLL.get(4)); //Invalid Input
// console.log(dLL.get(6)); //Invalid Input
// console.log(dLL.get(-1)); //Invalid Input
// console.log(dLL.get(-3)); //Invalid Input

// console.log(dLL.set(0, "Hii"));
// console.log(dLL.set(1, "Worldz"));
// console.log(dLL.set(2, "!"));
// console.log(dLL.set(3, "."));
// console.log(dLL.set(4, "Should be invalid")); //Invalid Input
// console.log(dLL.set(6, "Should be invalid")); //Invalid Input
// console.log(dLL.set(-1, "Should be invalid")); //Invalid Input
// console.log(dLL.set(-3, "Should be invalid")); //Invalid Input

// console.log(dLL.insert(0, "Hii")); //unshift("Hii")
// console.log(dLL.insert(1, "Worldz"));
// console.log(dLL.insert(2, "!"));
// console.log(dLL.insert(3, "."));
// console.log(dLL.insert(4, "End")); //push("End")
// console.log(dLL.insert(5, "Should be invalid")); //Invalid Input
// console.log(dLL.insert(7, "Should be invalid")); //Invalid Input
// console.log(dLL.insert(-1, "Should be invalid")); //Invalid Input
// console.log(dLL.insert(-3, "Should be invalid")); //Invalid Input

// console.log(dLL.remove(0)); //shift()
// console.log(dLL.remove(1));
// console.log(dLL.remove(2));
// console.log(dLL.remove(3)); //pop()
// console.log(dLL.remove(4)); //Invalid Input
// console.log(dLL.remove(6)); //Invalid Input
// console.log(dLL.remove(-1)); //Invalid Input
// console.log(dLL.remove(-3)); //Invalid Input

// console.log(dLL.reverseDLL());

dLL.logAsArray();
// console.log(dLL);