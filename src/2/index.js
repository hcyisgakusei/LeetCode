/*
2.Add Two Numbers
Question:
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
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
const addTwoNumbers = function (l1, l2) {
    let sumNumbers = new ListNode(0);
    let cur = sumNumbers;
    let flag = false;
    while (l1 || l2) {
        let l1Num = +(l1 || {}).val || 0;
        let l2Num = +(l2 || {}).val || 0;
        let sum = l1Num + l2Num;
        if (flag) {
            sum += 1;
            flag = false;
        }
        flag = sum >= 10;
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    flag ? cur.next = new ListNode(1) : '';
    return sumNumbers.next;
};




