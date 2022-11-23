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
//  var mergeTwoLists = function(l1, l2) {
//    const dummyNode = new ListNode(-1)
//    let p = dummyNode
//    let p1 = l1
//    let p2 = l2

//    if(l1 === null) return l2
//    if(l2 === null) return l1

//    while (p1 !== null && p2 !== null) {
//       if(p1.val < p2.val) {
//          p.next = p1
//          p1 = p1.next
//       } else {
//          p.next = p2
//          p2 = p2.next
//       }
//       p = p.next
//    }

//    console.log(p1,p2)

//    if(p1 !== null) {
//       p.next = p1
//    }
//    if(p2 !== null) {
//       p.next = p2
//    }

//    return dummyNode.next
// };

var mergeTwoLists = function(l1, l2) {
   if(l1 === null) return l2
   if(l2 === null) return l1
};

