/*
 * @lc app=leetcode.cn id=350 lang=javascript
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * [1,2,2,1]
 * [2,2]
 * 输出：[4,9]
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let map = {}
  let res = []
  for (let i = 0; i < nums1.length; i++) {
    const el = nums1[i];
    map[el] = (map[el] || 0) + 1
  }

  for (let i = 0; i < nums2.length; i++) {
    const el = nums2[i];
    if(map[el]) {
      res.push(el)
      map[el] -= 1
    }
  }
  return res
};
// @lc code=end

