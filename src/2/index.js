/*
2. 两数相加（中等）

问题:
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
您可以假设除了数字 0 之外，这两个数都不会以 0 开头。


示例：
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
*/

const ListNode = require('../utils').ListNode;
const arrayToNode = require('../utils').arrayToNode;
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let subNumbers = new ListNode(0);
  let cur = subNumbers;
  let flag = false;
  while (l1 || l2) {
    let sum = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0);
    if (flag) {
      sum += 1;
    }
    flag = (sum > 9);
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
    l1 = (l1 && l1.next) || null;
    l2 = (l2 && l2.next) || null;
  }
  console.log(flag);
  if (flag) {
    cur.next = new ListNode(1);
  }
  return subNumbers.next;
};


console.log(addTwoNumbers(arrayToNode([ 4, 9]), arrayToNode([ 6, 4])));




