const Queue = require("../Queue/Queue");

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(turnOnTraversal) {
    this.root = null;
    if (turnOnTraversal) {
      this.queue = new Queue();
      this.visitedNodes = [];
    }
  }

  insert(val, currentRoot) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = currentRoot || this.root;
    if (val === current.val) return "Found Duplicate Value";
    if (val > current.val) {
      if (!current.right) {
        current.right = newNode;
        return this;
      }
      return this.insert(val, current.right);
    }
    if (!current.left) {
      current.left = newNode;
      return this;
    }
    return this.insert(val, current.left);
  }

  //OR //if no need to return message on inserting duplicate value
  // insert(val, currentRoot) {
  //   const newNode = new Node(val);
  //   if (!this.root) {
  //     this.root = newNode;
  //   } else {
  //     let current = currentRoot || this.root;
  //     if (val === current.val) return;
  //     else if (val > current.val) {
  //       if (!current.right) current.right = newNode;
  //       else this.insert(val, current.right);
  //     } else {
  //       if (!current.left) current.left = newNode;
  //       else this.insert(val, current.left);
  //     }
  //   }
  //   return this;
  // }

  find(val, currentRoot) {
    if (!this.root) {
      return "BST is empty";
    }
    let current = currentRoot || this.root;
    if (val === current.val) return current;
    if (val > current.val) {
      if (!current.right) return "Value Not Found";
      return this.find(val, current.right);
    }
    if (!current.left) return "Value Not Found";
    return this.find(val, current.left);
  }

  bfs() {
    if (!this.root) return "Tree is empty";
    if (!this.queue.size && !this.visitedNodes.length) {
      this.queue.enqueue(this.root);
      return this.bfs();
    }
    if (!this.queue.size && this.visitedNodes.length) return this.visitedNodes;

    const nodeToVisit = this.queue.dequeue();
    this.visitedNodes.push(nodeToVisit.val);
    if (nodeToVisit.left) {
      this.queue.enqueue(nodeToVisit.left);
    }
    if (nodeToVisit.right) {
      this.queue.enqueue(nodeToVisit.right);
    }
    return this.bfs();
  }
}

// const bst = new BST();
const bst = new BST(true);
console.log(bst.insert(10));
console.log(bst.insert(5));
console.log(bst.insert(13));
console.log(bst.insert(11));
console.log(bst.insert(2));
console.log(bst.insert(16));
console.log(bst.insert(7));
console.log(bst.insert(5));

// console.log(bst.find(10));
// console.log(bst.find(5));
// console.log(bst.find(13));
// console.log(bst.find(11));
// console.log(bst.find(2));
// console.log(bst.find(16));
// console.log(bst.find(7));
// console.log(bst.find(5));
// console.log(bst.find(6));
// console.log(bst.find(9));

// console.log(bst.bfs());
