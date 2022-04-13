/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if(!root) return []
  let stack = [root.left]
  let res = []
  while(stack.length) {
    
    const node = stack.pop()

    if(node.right) {
      stack.push(node.right)
    }

    if(node.left) {
      stack.push(node.left)
    }

    if(node) {
      res.push(node.val)
    }

  }
  return res
};
// @lc code=end

