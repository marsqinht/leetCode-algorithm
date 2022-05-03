/*
 * @lc app=leetcode.cn id=215 lang=javascript
 * [2,3,6,7,1,2]
 * [215] 数组中的第K个最大元素
 */

// 冒泡排序


// 1.从大到小排序 取第K个
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  // const sort = (nums) =>  {
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = 0; j < nums.length - i; j++) {
  //       const curr = nums[j];
  //       const next = nums[j + 1];
  
  //       if(curr < next) {
  //         const temp = curr;
  //         nums[j] = next
  //         nums[j + 1] = temp
  //       }
  //       // index
  //     }
      
  //   }
  //   return nums
  // }
  const sort = nums => {

  }
  return sort(nums)[k - 1]
};

// @lc code=end

