/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * [1,2,5,7]
 * [2,4,5,6,9]
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
 var mergeTwoLists = function(l1, l2) {
   const dummyNode = new ListNode(-1)
   let currNode = dummyNode
   let pos1 = l1
   let pos2 = l2

   while (pos1 && pos2) {
      if(pos1.val <= pos2.val) {
         currNode.next = pos1
         currNode = pos1
         pos1 = pos1.next
      } else {
         currNode.next = pos2
         currNode = pos2
         pos2 = pos2.next
      }
   }
   if(!pos1 && pos2) {
      currNode.next = pos2
   }
   if(!pos2 && pos1) {
      currNode.next = pos1
   }

   return dummyNode.next
};

// var mergeTwoLists = function(l1, l2) {
//    if(l1 === null) return l2
//    if(l2 === null) return l1
// };

