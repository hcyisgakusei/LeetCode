/*
 101. Symmetric Tree（easy）

 Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).


 For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
    1
   / \
  2   2
 / \ / \
3  4 4  3


 But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3


Note:
Bonus points if you could solve it both recursively and iteratively.

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
 * @return {boolean}
 */


const isSymmetric = function (root) {
   const isSame = (tree1,tree2) => {
       if(!tree1 && !tree2) return true;
       if(!tree1 || !tree2 ) return false;
       if(tree1.val !== tree2.val) return false;
       return isSame(tree1.left,tree2.right) && isSame(tree1.right,tree2.left);
    };
    return isSame(root,root);
};
