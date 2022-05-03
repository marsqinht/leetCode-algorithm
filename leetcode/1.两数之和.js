/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *  输入：nums = [2,7,11,15], target = 9
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {

  const map = {}
  for (i=0;i < nums.length;i++) {
    const firstNum = nums[i]
    if(map[firstNum] !== undefined) {
      return [map[firstNum], i]
    }
    const targetNum = target - firstNum
    if(!map[targetNum]) {
      map[targetNum] = i
    } 

  }
  return []
};
// @lc code=end

