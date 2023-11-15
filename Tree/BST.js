class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val, currentRoot) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = currentRoot || this.root;
      if (val >= current.val) {
        if (!current.right) current.right = newNode;
        else this.insert(val, current.right);
      } else {
        if (!current.left) current.left = newNode;
        else this.insert(val, current.left);
      }
    }
    return this;
  }
}

const bst = new BST();
console.log(bst.insert(6));
console.log(bst.insert(2));
console.log(bst.insert(5));
console.log(bst.insert(4));
console.log(bst.insert(3));
console.log(bst.insert(1));
console.log(bst.insert(5));
