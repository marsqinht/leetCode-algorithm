/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function(head) {
//   const nodeMap = new WeakMap()
//   let node = head
//   while(node) {
//     if(!nodeMap.get(node)) {
//       nodeMap.set(node, true)
//       node = node.next
//     } else {
//       return true
//     }
//   }

//   return false
    
// };
var hasCycle = function(head) {
  if(!head) return false
  if(!head.next) return false
  let slow = head
  let fast = head.next.next

  while(slow && fast) {
    if (slow !== fast) {
      slow = slow.next
      fast = fast.next && fast.next.next
    } else {
      return true
    }
  }

  return false
    
};
// @lc code=end

