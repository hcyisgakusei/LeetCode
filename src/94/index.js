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
var inorderTraversal = function (root) {
  const stuck = [], result = [];
  let node = root;
  while (node || stuck.length) {
    while (node) {
      stuck.push(node);
      node = node.left;
    }
    node = stuck.pop();
    result.push(node.val);
    node = node.right;
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
console.log(inorderTraversal(root)); // [ 4, 2, 1, 5, 3, 6 ]

