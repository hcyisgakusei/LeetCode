/*
 237. Delete Node in a Linked List（easy）

 Question:
 Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.
Given linked list -- head = [4,5,1,9], which looks like following:

 Example 1:
 Input: head = [4,5,1,9], node = 5
 Output: [4,1,9]
 Explanation: You are given the second node with value 5, the linked list should become
 4 -> 1 -> 9 after calling your function.

 Example 2:
 Input: head = [4,5,1,9], node = 1
 Output: [4,5,9]
 Explanation: You are given the third node with value 1, the linked list should become
 4 -> 5 -> 9 after calling your function.
 */


// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} node 要删除的节点
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

let head = {
    val: 4,
    next: {
        val: 5,
        next: {
            val: 1,
            next: {
                val: 9,
                next: null
            }
        }
    }
};

deleteNode(head.next.next);
console.log(JSON.stringify(head));