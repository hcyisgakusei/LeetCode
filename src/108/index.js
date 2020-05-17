/*
108.将有序数组转换为二叉搜索树（简单）

问题：
将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
示例:

给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const TreeNode = require('../utils/index').TreeNode;
const sortedArrayToBST = function (nums) {
  const _sortedArrayToBST = function (left, right) {
    if (left > right) return null;
    if (left === right) {
      return new TreeNode(nums[left]);
    }
    let mid = Math.ceil((left + right) / 2);
    const root = new TreeNode(nums[mid]);
    if (mid > 0) {
      root.left = _sortedArrayToBST(left, mid - 1);
      root.right = _sortedArrayToBST(mid + 1, right);
    }
    return root;
  };
  return _sortedArrayToBST(0, nums.length - 1);
};

// const sortedArrayToBST = function (nums) {
//   const length = nums.length;
//   if (length === 0) {
//     return null;
//   }
//   if (length === 1) {
//     return new TreeNode(nums[0]);
//   }
//   let mid = Math.floor(length / 2);
//   const root = new TreeNode(nums[mid]);
//
//   root.left = sortedArrayToBST(nums.slice(0, mid ));
//   root.right = sortedArrayToBST(nums.slice(mid + 1));
//   return root;
// };
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
