/**
 * title: 子集
 * 给定一组不含重复元素的整数数组 nums， 返回该数组所有可能的子集（ 幂集）。
 * 说明： 解集不能包含重复的子集。
 * 
 * 输入: nums = [1, 2, 3]
 * 输出: [[3],[1],[2],[1, 2, 3],[1, 3],[2, 3],[1, 2],[]]
 */

/**
* @param {number[]} nums
* @return {number[][]}
*/
const subsets = nums => {
  let subsetsArr = [];
  const find = (index, nums, start) => {

  };
  find(0, nums, 1);

  return subsetsArr;
};

console.log(subsets([1, 2, 3]));