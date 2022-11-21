/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *  nums1 = [2,2,9,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 *          [1,5,6]
    输出：[1,2,2,3,5,6]
    解释：需要合并 [1,2,3] 和 [2,5,6] 。
    合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let nums1Index = m - 1
  let nums2Index = n - 1
  let insertIndex = m + n -1

  while (nums1Index>=0 && nums2Index>=0) {
    if(nums1[nums1Index] > nums2[nums2Index]) {
      nums1[insertIndex] = nums1[nums1Index]
      nums1Index--
      insertIndex--
    } else {
      nums1[insertIndex] = nums2[nums2Index]
      nums2Index--
      insertIndex--
    }
  }

  while(nums2Index >= 0) {
    nums1[insertIndex] = nums2[insertIndex]  
    insertIndex-- 
    nums2Index--
 }
};
// @lc code=end

