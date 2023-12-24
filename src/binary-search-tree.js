const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.data = null;
  }

  root() {
    return  this.data;
  }

  add(data) {

    this.data = addValue(this.data, data)

    function addValue(node, data){

      if(node === null){
        node = new Node(data);
        return node;
      }
      if (node.data === data) {
        return node;
      }
      if (data > node.data && node.right === null) {
        node.right = new Node(data);
        return node;
      }
      if(data < node.data && node.left === null) {
        node.left = new Node(data);
        return node;
      }
      if (data > node.data ) {
        node.right = addValue(node.right, data);
      }
      else {
        node.left = addValue(node.left, data);
      }
      return node;
    }
  }

  has(data) {
    return hasValue(this.data, data);

    function hasValue(node, data) {
      if(node === null){
        return false;
      }
      if (node.data===data) {
        return true;
      }
      if (data > node.data ) {
         return hasValue(node.right, data);
      }
      else {
        return hasValue(node.left, data);
      }
    }
  }

  find(data) {
    return findValue(this.data, data);

    function findValue (node, data){
      if (node === null){
        return null;
      }
      else if (data < node.data) {
        return findValue(node.left, data);
      }
      else if (data > node.data ) {
        return findValue(node.right, data);
      }
      else {
        return node;
      }
    }
  }

  remove(data) {
    this.data = rmValue(this.data, data);
    function rmValue (node, data){
      if(!node){
        return;
      }
      if (data > node.data ) {
        node.right = rmValue(node.right, data);
        return node;
      }
      if (data < node.data ) {
        node.left = rmValue(node.left, data);
        return node;
      }

      if ((node.data === data) && !node.left && !node.right) {
        return null;
      }

      if (node.data === data && !node.left) {
        node = node.right;
        return node;
      }

      if (node.data===data && !node.right) {
        node = node.left;
        return node;
      }

      let maxNodeLeft = node.left
      while(maxNodeLeft.right){
        maxNodeLeft = maxNodeLeft.right
      }
      node.data = maxNodeLeft.data;
      node.left = rmValue(node.left, maxNodeLeft.data)
      return node;
    }
  }

  min() {
    if( this.data === null) {
      return null;
    }

    let value = this.data;
    while(value.left){
      value = value.left
    }
    return value.data;
  }

  max() {
    if(this.data === null) {
      return null;
    }
    let value = this.data;
    while(value.right){
      value = value.right;
    }
    return value.data;
  }
}

module.exports = {
  BinarySearchTree
};