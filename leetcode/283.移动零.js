/*
 * @lc app=leetcode.cn id=283 lang=javascript
 * [2,3,0,6,0,5,6]
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums, end = nums.length) {
//   for(i = 0;i<end;i++) {
//     let el = nums[i]
//     if(el === 0 && i !== nums.length - 1) {
//       nums[i] = nums[i + 1]
//       nums[i + 1] = 0
//     }
//   }
//   if(end > 0) {
//     moveZeroes(nums, end - 1)
//   }
// };

// var moveZeroes = function(nums) {
//   const zeroIndexes = []
//   for (let i = 0; i < nums.length; i++) {
//     if(nums[i] === 0) {
//       zeroIndexes.push(i)
//     }
//   }

//   for (let i = 0; i < zeroIndexes.length; i++) {
//     const index = zeroIndexes[i];
//     nums.splice(index - i, 1)
//     nums.push(0)
//   }

// };
/*
 * @lc app=leetcode.cn id=283 lang=javascript
 * [2,3,0,6,0,5,6]
 * [2,3,6,0,0,5,6]
 * [283] 移动零
 */

var moveZeroes = function(nums) {
  let zeroLen = 0
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) {
      zeroLen += 1
      num[i] = nums[i + zeroLen]
      nums[i + zeroLen] = 0
    }
  }

};
// @lc code=end

