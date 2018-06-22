/**
 * title: 169. 求众数
 * 给定一个大小为 n 的数组， 找到其中的众数。 众数是指在数组中出现次数大于⌊ n / 2⌋ 的元素。
 * 你可以假设数组是非空的， 并且给定的数组总是存在众数。
 * 
 * 输入: [3, 2, 3]
 * 输出: 3
 * 
 * 输入: [2, 2, 1, 1, 1, 2, 2]
 * 输出: 2
 */

/**
  * @param {number[]} nums
  * @return {number}
  */

// 遍历存入json  [2, 2, 1, 1, 1, 2, 2] -->  {2:4, 1:3} --> 2
const majorityElement = nums => {
  let map = Object.create(null);
  let total = 0;
  let maxValue = null;
  nums.forEach(el => {
    map[el] = !map[el] ? 1 : map[el] + 1;
  });
  for (const key in map) {
    if (map[key] > total) {
      map[key] = total;
      maxValue = Number(key);
    }
  }
  return maxValue;
};

module.exports = {
  majorityElement
};