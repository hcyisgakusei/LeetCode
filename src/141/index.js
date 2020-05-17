/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 思路一
 *
 * 用哈希表记录遍历过的节点，如果新的节点在哈希表中则说明存在环
 *
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  const nodeMap = new Map();
  while (head) {
    if (nodeMap.has(head)) {
      return true;
    }
    nodeMap.set(head, head);
    head = head.next;
  }
  return false;
};

/**
 * 思路二
 *
 * 用两个指针，一个快指针一个慢指针，快指针一次移动两个，慢指针一次一个，如果快指针能够追上了慢指针则说明存在环
 * 如果快指针走完则说明不存在环
 *
 * @param {ListNode} head
 * @return {boolean}
 */

const hasCycle = function (head) {
  let quick = head, slow = head;
  while (quick) {
    quick = quick.next ? quick.next.next : null;
    slow = slow.next;
    if (quick && quick === slow) {
      return true;
    }
  }
  return false;
};
