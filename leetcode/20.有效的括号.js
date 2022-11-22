/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/** (({{[]}}))
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const symbolMap = {
     '{': '}',
     '(': ')',
     '[': ']'
  }

  const leftSymbol = '{(['
  const stack = []

  for (let i = 0; i < s.length; i++) {
    const character = s[i];
    if(leftSymbol.includes(character)) {
      stack.push(character)
    } else {
      const lastLeft = stack.pop()
      if(symbolMap[lastLeft] !== character) return false
    }
  }
  return !stack.length
};
// @lc code=end

