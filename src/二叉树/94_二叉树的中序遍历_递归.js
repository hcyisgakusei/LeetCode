/**
 * 94. 二叉树的中序遍历 【简单】
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
 *
 * 示例 1：
 * 输入：root = [1,null,2,3]
 * 输出：[1,3,2]
 *
 * 示例 2：
 * 输入：root = []
 * 输出：[]
 *
 * 示例 3：
 * 输入：root = [1]
 * 输出：[1]
 */


const TreeNode = require('../../common/treeNode');


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root){
  const result = [];

  function pushInorderTraversal(node){
     if(node) {
       pushInorderTraversal(node.left);
       result.push(node.val);
       pushInorderTraversal(node.right);
     }
  }
  pushInorderTraversal(root);
  return result;

};

const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, null), null));


console.log('**result**', inorderTraversal(tree));
