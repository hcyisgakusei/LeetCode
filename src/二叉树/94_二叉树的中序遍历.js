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


const ListNode = require('../../common/listNode').ListNode;


/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let pre = null;
  while (left) {

    left--;
  }
};

let params;
let current = new ListNode(1);
params = current;
current.next = new ListNode(2);
current = current.next;
current.next = new ListNode(3);
current = current.next;


console.log('**result**', reverseList(params))
