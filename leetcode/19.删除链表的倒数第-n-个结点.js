/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 *  [1,2,3,4,5]
 */
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {

  if(!head) return head
  let node1 = head
  let node2 = head

  for (let i = 0; i < n; i++) {
    node1 = node1.next
  }

  while(node1) {
    node1 = node1.next
    node2 = node2.next
  }

  node2.next = node2.next.next

  return head
};





// @lc code=end

