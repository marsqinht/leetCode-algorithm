/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
   const nodeMap = new WeakMap()
    let node = headA
    let node2 = headB
    while(node) {
      nodeMap.set(node, true)
      node = node.next
    }  
    while(node2) {
      if(nodeMap.get(node2)) {
        return node2
      }
      node2 = node2.next
    } 
    return null     
};
// @lc code=end

