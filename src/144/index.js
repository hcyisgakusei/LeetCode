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
var preorderTraversal = function (root) {
  const stuck = [], result = [];
  root && stuck.push(root);
  while (stuck.length) {
    let node = stuck.pop();
    result.push(node.val);
    node.right && stuck.push(node.right);
    node.left && stuck.push(node.left);
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
console.log(preorderTraversal(root));
