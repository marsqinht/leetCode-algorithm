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
var calculate = function(s) {
  const numberStack = []
  const operatorStack = []
  const operatorWeight = {'+': 1,'-': 1, '*': 2, '/': 2 }
  s = s.replaceAll(' ', '')
       .replaceAll('(-','(0-')
       .replaceAll('(+','(0+')

  let tempNum = ''
  for (let i = 0; i < s.length; i++) {
    const el = s[i];
    if(el === '(') {
      operatorStack.push('(')
    } else if(Number.isInteger(+el)) {
      tempNum = tempNum + el
      // numberStack.push(+el)
    } else if(operatorWeight?.[el]) {
      console.log(tempNum)
      if(tempNum) {
        numberStack.push(+tempNum)
        tempNum = ''
      }
      if(!operatorStack.length) {
        operatorStack.push(el)
      } else {
        if(tempNum) {
          numberStack.push(+tempNum)
          tempNum = ''
        }
        const lastOperatorWeight = operatorWeight?.[operatorStack[operatorStack.length - 1]]
        if(!lastOperatorWeight || operatorWeight?.[el] > lastOperatorWeight) {
          operatorStack.push(el)
        } else {
          console.log(numberStack,operatorStack)
          const rightNum = numberStack.pop()
          const leftNum = numberStack.pop()
          const operator = operatorStack.pop()
          numberStack.push(evaluate(leftNum || 0, rightNum, operator))
          operatorStack.push(el)
        }
      }
    } else if(el === ')') {
      if(tempNum) {
        numberStack.push(+tempNum)
        tempNum = ''
      }
      let flag = true 
      while(flag) {
        const operator = operatorStack.pop()
        if(operator === '(') {
          flag = false
        } else {
          const rightNum = numberStack.pop()
          const leftNum = numberStack.pop()
          numberStack.push(evaluate(leftNum || 0, rightNum, operator))
        }
      }
    }
    
    
  }
  if(tempNum) {
    numberStack.push(+tempNum)
    tempNum = ''
  }

  console.log('numberStack',numberStack)
  console.log('operatorStack',operatorStack)

  while(operatorStack.length) {
    const rightNum = numberStack.pop()
    const leftNum = numberStack.pop()
    const operator = operatorStack.pop()
    numberStack.push(evaluate(leftNum || 0, rightNum, operator))
  }

  return numberStack?.[0]

}

function evaluate(a,b, operator) {
  console.log(a,b,operator);
  const operatorMap = {
    '+': () => a + b,
    '-': () => a - b,
    '*': () => a * b,
    '/': () => a / b | 0,
    '^': () => a ^ b
  }

  return operatorMap[operator]()
}
// @lc code=end

