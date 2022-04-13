/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

/**
 * 
 * 
 * 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * 输出：[8,9,9,9,0,0,0,1]
 * 
 * **/

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const loopLen = l1.length > l2.length ? l1.length : l2.length
  let result = []
  let tempNum = 0
  for (i = 0; i < loopLen; i++) {
     const firstNum =  l1[i] || 0 
     const secondNum = l2[i] || 0
     const num = (firstNum + secondNum + tempNum) % 10;

     const temp = Math.floor((firstNum + secondNum  + tempNum) / 10);
     result.push(num)
    
     tempNum = temp
     
  }
  if(tempNum) {
    result.push(tempNum)
  }
  return result
};

console.log('object :>> ', addTwoNumbers([2,4,3], [5,6,4]));
// @lc code=end

