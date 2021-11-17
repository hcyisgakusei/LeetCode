/**
 * 206. 反转链表 【简单】
 * 链接：https://leetcode-cn.com/problems/reverse-linked-list/
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


const ListNode = require('../../common/listNode');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
    // 假设head 1->2->3
    // pre 指向null cur 指向 1 ，cur.next  = pre 反转 ，得到 1 ->null
    // pre 指向上一步反转的结果 1->null, cur 往前挪 指向 2
    // 一直反转得到 2->1->null , 3->2->1->null
    let pre, cur = head;
    while (cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
};

let params;
let current = new ListNode(1);
params = current;
current.next = new ListNode(2);
current = current.next;
current.next = new ListNode(3);
current = current.next;
console.log('**result**', reverseList(params));
