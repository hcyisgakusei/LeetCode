function ListNode(val) {
  this.val = val;
  this.next = null;
}


//  将数据转成单向链表
function arrayToNode(arr) {
  const node = new ListNode(0);
  let current = node;
  arr.forEach((item) => {
    current.next = new ListNode(item);
    current = current.next;
  });
  return node.next;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function Node(val, children) {
  this.val = val;
  this.children = children;
}

module.exports = {
  ListNode,
  arrayToNode,
  TreeNode,
  Node
};

