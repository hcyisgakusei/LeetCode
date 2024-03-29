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
var preorderTraversal = function(root) { // 根 --> 左 --> 右
    const result = [];
    function preorderTraversalPush(node){
      if(!node) return;
      result.push(node.val);
      node.left && preorderTraversalPush(node.left);
      node.right && preorderTraversalPush(node.right);
    }
    preorderTraversalPush(root);
    return result;
};

const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, null), null));


console.log('**result**', preorderTraversal(tree));
