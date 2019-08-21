class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.root == null) {
      this.root = newNode;
      return this;
    }

    let curr = this.root;
    while (curr !== null) {
      if (curr.value > val) {
        if (curr.left == null) {
          curr.left = newNode;
          return this;
        } else {
          curr = curr.left;
        }
      } else if (curr.value <= val) {
        if (curr.right == null) {
          curr.right = newNode;
          return this;
        } else {
          curr = curr.right;
        }
      }
    }
  }

  find(val) {
    if (this.root == null) return false;
    let curr = this.root;
    while (curr) {
      if (curr.value == val) {
        return curr;
      } else if (val < curr.value) {
        if (curr.left !== null) {
          curr = curr.left;
        } else return false;
      } else if (val > curr.value) {
        if (curr.right !== null) {
          curr = curr.right;
        } else return false;
      }
    }
  }
  invert(node = this.root) {
    if (node == null) return null;
    let left = this.invert(node.left);
    let right = this.invert(node.right);

    node.left = right;
    node.right = left;
    return node;
  }

  bfs() {
    let node = this.root;
    let queue = [];
    let results = [];
    queue.push(node);
    while (queue.length > 0) {
      node = queue.shift();
      results.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return results;
  }

  dfsPreOrder() {
    let results = [];

    function traverse(node) {
      results.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return results;
  }

  dfsPostOrder() {
    let results = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    }
    traverse(this.root);
    return results;
  }

  dfsInOrder() {
    let results = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      results.push(node);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return results;
  }

  isValidBST() {

    function traverseHelper(node, min, max) {
      if (!node) return true;
      if (node.value < min || node.value >= max) return false;
      
      let isLeftValid = traverseHelper(node.left, min, node.value);
      let isRightValid = traverseHelper(node.right, node.value, max);
      return isLeftValid && isRightValid;
    }

    return traverseHelper(this.root, -Infinity, Infinity);
  }
}

let tree = new BinarySearchTree();
tree.insert(4);
tree.insert(2);
tree.insert(7);
tree.insert(1);
tree.insert(3);
tree.insert(6);
tree.insert(9);
console.log(tree);
console.log(tree.invert());

let tree2 = new BinarySearchTree();
tree2.insert(10);
tree2.insert(6);
tree2.insert(15);
tree2.insert(3);
tree2.insert(8);
tree2.insert(20);
console.log(tree2.dfsPreOrder());

//       10
//    6     15
//  3  8      20
