/**
 * 145. 二叉树的后序遍历 【简单】
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
 * 给定一个二叉树的根节点 root ，返回它的 后序 遍历。
 *
 * 示例 1：
 * 输入：root = [1,null,2,3]
 * 输出：[3,2,1]
 *
 */


const TreeNode = require('../../common/treeNode');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) { // 左 --> 右 --> 根
  const result = [], stack = [root];
  let node =  root;
  while (stack.length && node) {
    node =  stack.pop();
    result.unshift(node.val);
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  return result;
};

const tree = new TreeNode(1, new TreeNode(2, new TreeNode(3, null, null), null), new TreeNode(4, new TreeNode(5, null, null), new TreeNode(6, null, null)));


console.log('**result**', postorderTraversal(tree));
