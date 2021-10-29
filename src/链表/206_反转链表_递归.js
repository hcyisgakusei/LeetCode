/**
 * 206. 反转链表 【简单】
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 *
 * 示例 1：
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 *
 * 示例 2：
 * 输入：head = [1,2]
 * 输出：[2,1]
 *
 * 示例 3：
 * 输入：head = []
 * 输出：[]
 */


const ListNode = require('../../common/listNode').ListNode;

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseList = function (head) {
  if(!head || !head.next) return head;
  const node =  reverseList(head.next);
  head.next.next = head ;
  head.next  = null;
  return node;
};


let params;
let current = new ListNode(1);
params = current;
current.next = new ListNode(2);
current = current.next;
current.next = new ListNode(3);
current = current.next;


console.log('**result**',reverseList(params))
