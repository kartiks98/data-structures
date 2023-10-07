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
    if (!this.head) return "Invalid Input";
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
    if (!this.head) return "Invalid Input";
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
// console.log(sLL.pop()); //Invalid Input

// console.log(sLL.shift());
// console.log(sLL.shift());
// console.log(sLL.shift());
// console.log(sLL.shift());
// console.log(sLL.shift()); //Invalid Input

// console.log(sLL.unshift("hello"));
// console.log(sLL.unshift("World"));
// console.log(sLL.unshift("!!!"));
// console.log(sLL.unshift("..."));

// console.log(sLL.get(0,"Hii"));
// console.log(sLL.get(1,"Worldz"));
// console.log(sLL.get(2,"!"));
// console.log(sLL.get(3,"."));
// console.log(sLL.get(4,"Should be out of range")); //Invalid Input
// console.log(sLL.get(6,"Should be out of range")); //Invalid Input
// console.log(sLL.get(-1,"Should be invalid")); //Invalid Input
// console.log(sLL.get(-3,"Should be invalid")); //Invalid Input

// console.log(sLL.set(0,"Hii"));
// console.log(sLL.set(1,"Worldz"));
// console.log(sLL.set(2,"!"));
// console.log(sLL.set(3,"."));
// console.log(sLL.set(4,"Should be invalid")); //Invalid Input
// console.log(sLL.set(6,"Should be invalid")); //Invalid Input
// console.log(sLL.set(-1,"Should be invalid")); //Invalid Input
// console.log(sLL.set(-3,"Should be invalid")); //Invalid Input

// console.log(sLL.insert(0,"Hii")); //unshift("Hii")
// console.log(sLL.insert(1,"Worldz"));
// console.log(sLL.insert(2,"!"));
// console.log(sLL.insert(3,"."));
// console.log(sLL.insert(4,"End")); //push("End")
// console.log(sLL.insert(6,"Should be invalid")); //Invalid Input
// console.log(sLL.insert(8,"Should be invalid")); //Invalid Input
// console.log(sLL.insert(-1,"Should be invalid")); //Invalid Input
// console.log(sLL.insert(-3,"Should be invalid")); //Invalid Input

// console.log(sLL.remove(0)); //shift()
// console.log(sLL.remove(1));
// console.log(sLL.remove(2));
// console.log(sLL.remove(3)); //pop()
// console.log(sLL.remove(4)); //Invalid Input
// console.log(sLL.remove(6)); //Invalid Input
// console.log(sLL.remove(-1,"Should be invalid"));
// console.log(sLL.remove(-3,"Should be invalid"));

sLL.logAsArray();
console.log(sLL);
