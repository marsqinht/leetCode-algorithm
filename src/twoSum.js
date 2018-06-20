/**
 * title: 两数之和
 * 给定一个整数数组和一个目标值， 找出数组中和为目标值的两个数。
 * 你可以假设每个输入只对应一种答案， 且同样的元素不能被重复利用。
 * 
 * 示例: 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回[0, 1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 循环嵌套,值相加
const twoSum = function (nums, target) {
  for (let i = 0, len = nums.length; i < len; i++) {
    const num1 = nums[i];  
    for (let j = i + 1, len = nums.length; j < len; j++) {
      let num2 = nums[j];
      if(num1 + num2 === target) {
        return [i, j];
      }
    }
  }
  return [];
};

// 循环两次,对比
const twoSumII = function (nums, target) {
  let map = new Map();
  for (let i = 0, len = nums.length; i < len; i++) {
    map.set(nums[i], i);
  }
  for (let i = 1, len = nums.length; i < len; i++) {
    let el = target - nums[i];
    if(map.has(el)) {
      return [map.get(el), i].sort();
    }
  }
  return [];
};

//循环一次,比对哈希表
const twoSumIII = function (nums, target) {
  const map = {};
  for (let i = 0, len = nums.length; i < len; i++) {
    let el = target - nums[i];
    if (map[el] !== undefined) {
      return [map[el], i];
    }
    map[nums[i]] = i;
  }
  return [];
};


module.exports = {
  twoSum,
  twoSumII,
  twoSumIII
};