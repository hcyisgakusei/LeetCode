/*
206. Reverse Linked List
Question:
Reverse a singly linked list.

Example:
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// const reverseList = (head)  => {
//     let pre = null, next = null;
//     while (head) {
//         next = head.next;
//         head.next = pre;
//         pre = head;
//         head = next;
//     }
//     return pre;
// };

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 递归
 */

const reverseList = (head) => {
    if (!head || !head.next) {
        return head;
    }
    const cur = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return cur;
};

const testNode = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
};
console.log(JSON.stringify(reverseList(testNode)));
console.log(JSON.stringify(reverseList({val: 1, next: null})));
console.log(JSON.stringify(reverseList({val: 1, next: {val: 2, next: null}})));

