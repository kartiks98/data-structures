const Queue = require("../Queue/Queue");

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  //OR
  // constructor(turnOnTraversal) {
  //   this.root = null;
  //   if (turnOnTraversal) {
  //     this.queue = new Queue();
  //     this.visitedNodes = [];
  //   }
  // }
  constructor() {
    this.root = null;
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

  //OR
  // bfs() {
  //   if (!this.root) return "Tree is empty";
  //   if (!this.queue.size && !this.visitedNodes.length) {
  //     this.queue.enqueue(this.root);
  //     return this.bfs();
  //   }
  //   if (!this.queue.size && this.visitedNodes.length) return this.visitedNodes;

  //   const nodeToVisit = this.queue.dequeue();
  //   this.visitedNodes.push(nodeToVisit.val);
  //   if (nodeToVisit.left) {
  //     this.queue.enqueue(nodeToVisit.left);
  //   }
  //   if (nodeToVisit.right) {
  //     this.queue.enqueue(nodeToVisit.right);
  //   }
  //   return this.bfs();
  // }

  bfs() {
    const queue = new Queue();
    const visitedNodes = [];
    const traverse = () => {
      if (!this.root) return "Tree is empty";
      if (!queue.size && !visitedNodes.length) {
        queue.enqueue(this.root);
        return traverse();
      }
      if (!queue.size && visitedNodes.length) return visitedNodes;

      const nodeToVisit = queue.dequeue();
      visitedNodes.push(nodeToVisit.val);
      if (nodeToVisit.left) {
        queue.enqueue(nodeToVisit.left);
      }
      if (nodeToVisit.right) {
        queue.enqueue(nodeToVisit.right);
      }
      return traverse();
    };
    return traverse();
  }

  dfsPreOrder() {
    if (!this.root) return "Tree is empty";
    const visitedNodes = [];

    const traverse = (nodeToVisit) => {
      visitedNodes.push(nodeToVisit.val);
      if (nodeToVisit.left) traverse(nodeToVisit.left);
      if (nodeToVisit.right) traverse(nodeToVisit.right);
    };
    return traverse(this.root) || visitedNodes;
  }

  dfsPostOrder() {
    if (!this.root) return "Tree is empty";
    const visitedNodes = [];

    const traverse = (nodeToVisit) => {
      if (nodeToVisit.left) traverse(nodeToVisit.left);
      if (nodeToVisit.right) traverse(nodeToVisit.right);
      visitedNodes.push(nodeToVisit.val);
    };
    return traverse(this.root) || visitedNodes;
  }

  dfsInOrder() {
    if (!this.root) return "Tree is empty";
    const visitedNodes = [];

    const traverse = (nodeToVisit) => {
      if (nodeToVisit.left) traverse(nodeToVisit.left);
      visitedNodes.push(nodeToVisit.val);
      if (nodeToVisit.right) traverse(nodeToVisit.right);
    };
    return traverse(this.root) || visitedNodes;
  }
}

const bst = new BST();
// const bst = new BST(true); //OR
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
// console.log(bst.insert(87));
// console.log(bst.bfs()); //todo : debug why bfs() is not working after inserting a node after calling bfs() once in case of OR approach when we are storing queue & visitedNodes inside the constructor

console.log(bst.dfsPreOrder());
console.log(bst.dfsPreOrder());
console.log(bst.dfsPostOrder());
console.log(bst.dfsInOrder());
