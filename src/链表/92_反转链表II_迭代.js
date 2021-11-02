/**
 * 92. 反转链表II 【中等】
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。
 * 请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 *
 * 示例 1：
 * 输入：head = [1,2,3,4,5], left = 2, right = 4
 * 输出：[1,4,3,2,5]
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (!head || !head.next || left === right) return head;
    let headTop = null, leftNode = head, rightNode = head;
    for (let i = 1; i < left; i++) {
        headTop = headTop ? headTop.next : head;
        leftNode = leftNode.next;
        rightNode = rightNode.next;
    }
    let pre = null, cur = leftNode;
    for (let i = 0; i <= right - left && cur; i++) {
        rightNode = rightNode.next;
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    leftNode.next = rightNode;
    if (left === 1) return pre;
    headTop.next = pre;
    return head;
};


let params;
let current = new ListNode(1);
params = current;
current.next = new ListNode(2);
current = current.next;
current.next = new ListNode(3);
current = current.next;
current.next = new ListNode(4);
current = current.next;
current.next = new ListNode(5);
current = current.next;

console.log('**result**', JSON.stringify(reverseBetween(params, 2, 4)));
