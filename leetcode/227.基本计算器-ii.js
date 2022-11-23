/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {

  const postFix = InfixToPostfix(s.replaceAll(' ', ''))
  const operators = ['+', '-', '*', '/']


  const resultStack = []

  for (let i = 0; i < postFix.length; i++) {
    const item = postFix[i];
    if(Number.isInteger(+item)) {
      resultStack.push(+item)
    } else if(operators.includes(item)) {
      const right = resultStack.pop()
      const left = resultStack.pop()

      console.log('object :>> ', left, right, item);
      resultStack.push(evaluate(left, right, item))
    } else {
      
    }
  }

  return resultStack?.[0]


};

function evaluate(a,b, operator) {
  const operatorMap = {
    '+': () => a + b,
    '-': () => a - b,
    '*': () => a * b,
    '/': () => a / b | 0,
    '^': () => a ^ b
  }

  return operatorMap[operator]()
}

function InfixToPostfix(string) {
  const stack = []
  const operatorStack = []
  const operators = ['+', '-', '*', '/']

  string = `(${string})`

  let tempNumber = ''
  for (let i = 0; i < string.length; i++) {
    const el = string[i];
    if(Number.isInteger(Number(el))) {
      tempNumber += el
      // stack.push(el)
    } else if (operators.includes(el)) {
      if(tempNumber) {
        stack.push(tempNumber)
        tempNumber = ''
      }
      operatorStack.push(el)
    } else if(el === ')') {
      if(tempNumber) {
        stack.push(tempNumber)
        tempNumber = ''
      }

      stack.push(operatorStack.pop())
    }
  }

  if(tempNumber) {
    stack.push(tempNumber)
  }
  while(operatorStack.length) {
    stack.push(operatorStack.pop())
  }

  console.log('stack :>> ', stack);

  return stack
}


console.log('calculate() :>> ', calculate('1-1+1-4+4'));
// @lc code=end

