/*
145. 二叉树的后序遍历(困难)
问题：
给定一个二叉树，返回它的 后序 遍历。

示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [3,2,1]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const stuck = [], result = [];
  root && stuck.push(root);
  while (stuck.length) {
    let node = stuck.pop();
    result.unshift(node.val);
    node.left && stuck.push(node.left);
    node.right && stuck.push(node.right);
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
console.log(postorderTraversal(root));


