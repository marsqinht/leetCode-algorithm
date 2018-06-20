/**
 * title: 数组拆分 I
 * 给定长度为 2 n 的数组, 你的任务是将这些数分成 n 对, 例如(a1, b1), (a2, b2), ..., (an, bn)， 使得从1 到 n 的 min(ai, bi) 总和最大。
 * 
 * 输入: [1, 4, 3, 2]
 * 输出: 4
 * 解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).
 * 
 * 提示:
 * n 是正整数, 范围在[1, 10000].
 * 数组中的元素范围在[-10000, 10000].
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// 根据规律，数组按从小到大重拍，两两一组，组成的即综合最大
var arrayPairSum = function (nums) {
  let sortArr = nums.sort((a, b) => (a - b));
  let max = 0;
  for (let i = 0, len = sortArr.length; i < len; i+=2) {
    max += sortArr[i];
  }
  return max;
};

// 优化改成函数式编程
var arrayPairSumII = function (nums) {
  return nums.sort((a, b) => a - b).filter((el, i) => i%2 === 0).reduce((prev, cur) => prev + cur);
};


module.exports = {
  arrayPairSum,
  arrayPairSumII
};