/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
let node = null
var isPalindrome = function(head) {
  // const stack = []
  node = head

  // let currNode = head
  // while(currNode) {
  //   stack.push(currNode.val)
  //   currNode = currNode.next
  // }

  // if(!stack.length) return true

  // let leftIndex = 0
  // let rightIndex = stack.length - 1

  // while(leftIndex <= rightIndex) {
  //   if(stack[leftIndex] !== stack[rightIndex]) {
  //     return false
  //   }
  //   leftIndex += 1
  //   rightIndex -= 1
  // }

  return check(head)

};

function check(head) {
  if(!head) return true

  let res = check(head.next) && (node.value === head.value)
  node = node.next
  return res
}
// @lc code=end

