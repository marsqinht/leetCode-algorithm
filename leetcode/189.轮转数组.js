/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 * nums = [1,2,3,4,5,6,7], k = 3
 */

// @lc code=start
// 1.讲后面k个元素，整体移动到数组之前。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

  nums = nums.filter((v,i) => i> nums.length - 1 - k).concat(nums.filter((v, i) => i<nums.length - k))

};

console.log('object :>> ', rotate([1,2,3,4,5,6,7], 3));
// @lc code=end

