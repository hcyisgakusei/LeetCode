/*
429. N叉树的层序遍历 （中等）
给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。
例如，给定一个 3叉树 :
返回其层序遍历:

[
     [1],
     [3,2,4],
     [5,6]
]

*/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
// const Node = require('../utils/index').Node;

function Node(val, id, children) {
  this.val = val;
  if (children && children.length > 0) {
    this.children = children;
  }
  this.id = id;
}

const levelOrder = function (root) {
  if (!root) return [];
  const stuck = [[root]];
  const result = [];
  let nodeArr;
  while (stuck.length) {
    nodeArr = stuck.shift();
    const currentChildren = [];
    const currentResult = [];
    nodeArr.forEach((node) => {
      if (node.children) {
        currentChildren.push(...node.children);
      }
      currentResult.push(node.val);
    });

    currentResult.length && result.push(currentResult);
    currentChildren.length && stuck.push(currentChildren);
  }
  return result;
};


const root = new Node(1, 1, [new Node(3, 2, [new Node(5, 3), new Node(6, 4)]), new Node(2, 5),
  new Node(4, 6)]);

console.log('root', JSON.stringify(root));


const treeToArr = function (root) {
  if (!root) return [];
  const result = [];
  let currentNode;
  const stuck = [{
    parentId: -1,
    children: [root]
  }];
  while (stuck.length) {
    currentNode = stuck.shift();
    currentNode.children.forEach(node => {
      if (node.children) {
        stuck.push({
          children: node.children,
          parentId: node.id
        });
      }

      result.push({
        val: node.val,
        id: node.id,
        parentId: currentNode.parentId,
      })
    });
  }
  return result;
};


const arr = treeToArr(root);

// console.log(arr);

const arrToTree = function (arr) {
  const map = {};
  arr.forEach((item) => {
    map[item.id] = item;
    map[item.id].children = []
  });

  let root;

  arr.forEach(item => {
    let node = item;

    if (node.parentId === -1) {
      root = node;
    } else {
      map[item.parentId].children.push(node);
    }
    delete node.parentId;
  });
  return root


  // function nodeToTree(node) {
  //   if (!node) return;
  //   const childrenArr = arr.filter((item) => item.parentId === node.id);
  //   const nodeArr = childrenArr.map((item) => nodeToTree(item));
  //   return new Node(
  //     node.val,
  //     node.id,
  //     nodeArr.length ? nodeArr : null
  //   );
  //
  // }
  // const root = arr.find(item => item.parentId === -1);
  // return nodeToTree(root);
};
console.log('root', JSON.stringify(arrToTree(arr)));





