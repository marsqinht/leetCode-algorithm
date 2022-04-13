/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *输入：nums = [0,0,1,1,1,2,2,3,3,4]
 输出：5, nums = [0,1,2,3,4]
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//   let mapper = {}
//   for (i=0;i < nums.length;i++) {
//     const el = nums[i]
//     if (!mapper[el]) {
//       mapper[el] = 1
//     } else {
//       nums.splice(i, 1)
//       i -= 1
//     }
//   }
//   return nums.length
// };
var removeDuplicates = function(nums) {
  if(nums == null || nums.length == 0) return 0;
  for (i=0;i < nums.length;i++) {
    const el = nums[i]
    if (i !== 0 && nums[i] === nums[i - 1]) {
      nums.splice(i, 1)
      i -= 1
    }
  }
  return nums.length
};
// @lc code=end

