/*
19. 删除链表的倒数第N个节点(中等)

问题:
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.
当删除了倒数第二个节点后，链表变为 1->2->3->5.

说明：
给定的 n 保证是有效的。

进阶：
你能尝试使用一趟扫描实现吗
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
// 设定了双指针 slow 和 fast 的话，让 fast 先走 n个  节点，这样 slow 和 fast之间就相距 n个节点。
// 再让fast 走到 链表尾部NULL，删除的元素就是slow的next
const removeNthFromEnd = function (head, n) {
  const preHead = new ListNode(0);
  preHead.next = head;
  let slow = head, fast = head;
  while (n) {
    fast = fast.next;
    n--;
  }
  while (fast && fast.next) {
    slow = slow.next;
    fast =fast.next;
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
