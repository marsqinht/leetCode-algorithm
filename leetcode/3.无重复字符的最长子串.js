/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *  pwwkew
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let keyMap = {}
  let currLongNum = 0
  let longestNum = 0
  let tem = 0
  for (let i = 0; i < s.length; i++) {

    const key = s[i]
    if(!keyMap[key]) {
      keyMap[key] = 1
      currLongNum += 1


      console.log('keyMap :>> ', i, keyMap);

      if(i === s.length - 1) {
        if(currLongNum >= longestNum) longestNum = currLongNum
      }
    } else { 

      s = s.substring(i - 1)

      console.log('s :>> ', s);
      i -= 1
      if(currLongNum >= longestNum) longestNum = currLongNum
      keyMap = {} 
      currLongNum = 0
    }
  }
  return longestNum
};

console.log('pwwkew :>> ', lengthOfLongestSubstring('dvdf'));
// @lc code=end

