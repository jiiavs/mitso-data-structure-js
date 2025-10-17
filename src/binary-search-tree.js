const { NotImplementedError } = require("../extensions/index.js");

let Node;
try {
 
  Node = require('../extensions/list-tree.js').Node;
} catch (e) {
  Node = class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  };
}

module.exports = class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  
  root() {
    return this._root;
  }

  
  add(data) {
    const newNode = new Node(data);
    if (this._root === null) {
      this._root = newNode;
      return this;
    }

    let current = this._root;
    while (true) {
      if (data === current.data) {
        
        return this;
      }

      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  
  has(data) {
    return this.find(data) !== null;
  }

  
  find(data) {
    let current = this._root;
    while (current !== null) {
      if (data === current.data) return current;
      current = data < current.data ? current.left : current.right;
    }
    return null;
  }

  
  remove(data) {
    const removeNode = (node, value) => {
      if (node === null) return null;

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      }
      if (value > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      }

      
      
      if (node.left === null && node.right === null) return null;
     
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;
      
      let minRight = node.right;
      while (minRight.left !== null) minRight = minRight.left;
      node.data = minRight.data;
      node.right = removeNode(node.right, minRight.data);
      return node;
    };

    this._root = removeNode(this._root, data);
    return this;
  }

  min() {
    if (this._root === null) return null;
    let current = this._root;
    while (current.left !== null) current = current.left;
    return current.data;
  }

  max() {
    if (this._root === null) return null;
    let current = this._root;
    while (current.right !== null) current = current.right;
    return current.data;
  }
};
