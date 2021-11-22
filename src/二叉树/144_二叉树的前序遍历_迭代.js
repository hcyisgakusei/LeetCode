/**
 * 94. 二叉树的前序遍历 【简单】
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * 给定一个二叉树的根节点 root ，返回它的 前序 遍历。
 *
 * 示例 1：
 * 输入：root = [1,null,2,3]
 * 输出：[1,2,3]
 *
 * 示例 2：
 * 输入：root = []
 * 输出：[]
 *
 * 示例 3：
 * 输入：root = [1]
 * 输出：[1]
 *
 * 示例 4：
 * 输入：root = [1,2]
 * 输出：[1,2]
 *
 * 示例 5：
 * 输入：root = [1,null,2]
 * 输出：[1,2]
 */


const TreeNode = require('../../common/treeNode');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const result = [], stack = [root];
  let node = root;
  while (stack.length && node) {
    result.push(node.val);
    node.right && stack.unshift(node.right);
    node.left && stack.unshift(node.left);
    node = stack.shift();
  }
  return result;
};

const tree = new TreeNode(1, new TreeNode(2, new TreeNode(3, null, null), null), new TreeNode(4, new TreeNode(5, null, null), new TreeNode(6, null, null)));


console.log('**result**', preorderTraversal(tree));
