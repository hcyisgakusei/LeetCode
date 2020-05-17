/*
83. 删除排序链表中的重复元素

问题:
给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例 1:
输入: 1->1->2
输出: 1->2

示例 2:
输入: 1->1->2->3->3
输出: 1->2->3

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const ListNode = require('../utils').ListNode;
const arrayToNode = require('../utils').arrayToNode;
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// const deleteDuplicates = function (head) {
//   const valArr = [];
//   let result = new ListNode(0);
//   let current = result;
//   while (head) {
//     const val = head.val;
//     if (valArr.indexOf(val) === -1) {
//       current.next = new ListNode(val);
//       valArr.push(val);
//       current = current.next;
//     }
//     head = head.next;
//   }
//   return result.next;
// };

const deleteDuplicates = function (head) {
  let node = head;
  let nextNode = node ? node.next : null;
  while (node) {
    while (node && (!nextNode || (nextNode && nextNode.val !== node.val))) {
      node.next = nextNode;
      node = node.next;
    }
    nextNode = nextNode ? nextNode.next : null;
  }
  return head;
};

const obj1 = arrayToNode([1,2,3]);

console.log(deleteDuplicates(obj1));


