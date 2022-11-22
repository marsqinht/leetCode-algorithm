/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const stack = []
  const operatorStack = []
  const operators = ['+', '-', '*', '/']

  string = `(${s.split(' ').join('')})`

  // console.log('string :>> ', string);
  for (let i = 0; i < string.length; i++) {
    const el = string[i];
    if(Number.isInteger(Number(el))) {
      stack.push(el)
    } else if (operators.includes(el) ) {
      operatorStack.push(el)
    } else if(el === ')') {

        const right = stack.pop()
        const left = stack.pop()
        stack.push(evaluate(+left, +right, operatorStack.pop()))
        // stack.push(operatorStack.pop())
    }
  }

  function evaluate(a,b, operator) {
    const operatorMap = {
      '+': () => a + b,
      '-': () => a - b,
      '*': () => a * b,
      '/': () => a / b
    }

    return operatorMap[operator]()
  }

  // console.log('stack :>> ', stack, operatorStack);
  return stack?.[0]
}
// @lc code=end

