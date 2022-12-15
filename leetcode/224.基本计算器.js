/*
 * @lc app=leetcode.cn id=224 lang=javascript
 * 1-(     -2)
 * [1,2]
 * [-(-)]
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function (s) {
  let sign = 1, res = 0, valStack = [], signStack = []
  const isNumber = v => v <= '9' && v >= '0'
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '+') sign = 1
      else if (s[i] === '-') sign = -1
      else if (s[i] === '(') {
          valStack.push(res)
          signStack.push(sign)
          res = 0
          sign = 1
      }
      else if (s[i] === ')') res = res * signStack.pop() + valStack.pop()
      else if (isNumber(s[i])) {
          let n = s[i]
          while (i+1 && isNumber(s[i+1])) n += s[(i++)+1]
          res += sign * (+n)
      }
  }
  return res
};


// console.log(calculate('1-(     -2)'))
// @lc code=end

