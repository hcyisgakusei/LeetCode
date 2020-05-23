/*
21. 合并两个有序链表（简单）

问题：
将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

*/

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
function ListNode(val) {
    this.val = val;
    this.next = null;
}

const mergeTwoLists = function (l1, l2) {
    let result = new ListNode(0);
    let cur = result;
    while (l1 || l2) {
        if (!l1) {
            cur.next = new ListNode(l2.val);
            l2 = l2.next;
        } else if (!l2) {
            cur.next = new ListNode(l1.val);
            l1 = l1.next;
        } else if (l1.val < l2.val) {
            cur.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            cur.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        cur = cur.next;
    }
    return result.next;
};

const l1 = {
    val: 1, next: {
        val: 2, next: {
            val: 4,
            next: null
        }
    }
};
const l2 = {
    val: 1, next: {
        val: 3, next: {
            val: 4,
            next: null
        }
    }
};
console.log(JSON.stringify(mergeTwoLists(l1, l2)));
