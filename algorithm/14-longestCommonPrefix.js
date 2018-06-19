/**
 * title: 最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀， 返回空字符串 ""。
 * 
 * 示例: 
 * 输入: ["flower", "flow", "flight"]
 * 输出: "fl"
 * 
 * 输入: ["dog", "racecar", "car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 说明:
 * 所有输入只包含小写字母 a - z
 */


/**
 * @param {string[]} strs
 * @return {string}
 */

// ["flower", "flow", "flight"] ==> [ 'f', 'l', 'o', 'w', 'e', 'r' ],['f', 'l', 'o', 'w'], ['f', 'l', 'i', 'g', 'h', 't'] ==> hashmap存放
const longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  let shortLength = Number.POSITIVE_INFINITY;
  let strMap = {};
  strs = strs.map(el => {
    shortLength = el.length < shortLength ? el.length : shortLength;
    return el.split('');
  });
  console.log(strs);
  for (let i = 0; i < shortLength; i++) {
    for (let j = 0; j < strs.length; j++) {
      const el = strs[j][i];
      if (strMap[i] && el !== strMap[i]) {
        strMap[i] = '';
        break;
      }
      strMap[i] = el;
    }
  }
  return strMap['0'] ? Object.values(strMap)
    .join('') : '';
};


// 优化,直接遍历数组比较;
const longestCommonPrefix2 = function (strs) {
  if (!strs.length) return '';
  let len = strs.length;
  let isLoop = true;
  let index = 0;
  let strMap = [];
  let uniqueArr = Array.from(new Set(strs));
  if (uniqueArr.length === 1) return uniqueArr.join('');
  while (isLoop) {
    for (let i = 0; i < len; i++) {
      let el = strs[i][index] || '';
      if (strMap[index] !== undefined && el !== strMap[index]) {
        isLoop = false;
        strMap.splice(index, 1);
        break;
      }
      strMap[index] = el;
    }
    index++;
  }
  return strMap.join('');
};

console.log(longestCommonPrefix2(['', 'b']), longestCommonPrefix(['']));
