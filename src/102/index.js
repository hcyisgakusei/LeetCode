/*
102. 二叉树的层序遍历(中等)

问题：
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。


示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  const stuck = [], result = [];
  root && stuck.push(root);
  while (stuck.length) {
    let currentStuckLength = stuck.length;
    result.push([]);
    for (let i = 0; i < currentStuckLength; i++) {
      const node = stuck.shift();
      result[result.length - 1].push(node.val);
      node.left &&  stuck.push(node.left);
      node.right &&  stuck.push(node.right);
    }
  }
  return result;
};
const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4
    }
  },
  right: {
    val: 3,
    left: {
      val: 5,
    },
    right: {
      val: 6
    }
  }
};

console.log(levelOrder(root));
