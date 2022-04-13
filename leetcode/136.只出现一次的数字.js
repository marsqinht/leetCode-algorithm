/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums = nums.sort((a,b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if(i === 0) {
      if(num !== num[i + 1]) return num
      continue
    }
    if(i === nums.length - 1) {
      if(num !== num[i - 1]) return num
      continue
    }
    if (num !== num[i - 1] && num !== num[i + 1]) {
      return num
    }
    
  }
};
// @lc code=end

