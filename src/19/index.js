/*
19. Remove Nth Node From End of List
Question:
Given a linked list, remove the n-th node from the end of list and return its head.

Example:
Given linked list: 1->2->3->4->5, and n = 2.
After removing the second node from the end, the linked list becomes 1->2->3->5.

Note:
Given n will always be valid.

Follow up:
Could you do this in one pass?

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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
    // let current = head, length = 0, index = 0;
    // while (current) {
    //     length++;
    //     current = current.next;
    // }
    // current = head;
    // const removeIndex = length - n;
    // if (removeIndex === 0) {
    //     return head.next;
    // }
    // while (index < length - 1) {
    //     if (index + 1 === removeIndex) {
    //         current.next = current.next.next;
    //         index++;
    //     }
    //     current = current.next;
    //     index++;
    // }
    // return head;


    // 双指针
    const preHead = new ListNode(0);
    preHead.next = head;
    let slow = preHead, fast = preHead;
    while (n > 0) {
        fast = fast.next;
        n--;
    }
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return preHead.next;
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

console.log(JSON.stringify(removeNthFromEnd(testNode, 2)));
console.log(JSON.stringify(removeNthFromEnd({val: 1, next: null}, 1)));
console.log(JSON.stringify(removeNthFromEnd({val: 1, next: {val: 2, next: null}}, 2)));
console.log(JSON.stringify(removeNthFromEnd({val: 1, next: {val: 2, next: null}}, 1)));