/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let needPos = 0 + k
  for (let i = 0; i < nums.length; i++) {
    pos = (i + k) % nums.length
    const tem = nums[pos]
    nums[pos] = nums[i]
    
    nums[pos] = nums[i]
    
  }
};
// @lc code=end

