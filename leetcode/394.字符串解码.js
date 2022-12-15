/*
 * @lc app=leetcode.cn id=394 lang=javascript
 * 3[a2[c]]
 * [3,2]
 * [[,a,cc,]]
 * accaccacc
 * 
 * 3[a]2[bc]
 * [2]
 * [aaa,bbcbvc]
 * 
 * 
 * aaabcbc
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const numberStack = []
  const codeStack = []
  let tempNumber = ''

  for (let i = 0; i < s.length; i++) {
    let flag = true
    const el = s[i];
    // console.log(el)
    if(Number.isInteger(+el)) {
      tempNumber += el
    } else if(el === ']') {
   
      let code = ''
      console.log(numberStack, codeStack)
      while (flag) {
        const right = codeStack.pop()
        if(right === '[' || !right) {
          // console.log(11)
          flag = false
          break
        }
        const left = codeStack.pop()

        if(left === '[') {
          code = code + right
          const length = +(numberStack.pop())
          const repeatCount = new Array(length).fill(0)
          // console.log(111,code)
          
          codeStack.push(repeatCount.map(v => code).join(''))
          code = ''
          // console.log(11)
          flag = false
          break
        } else {
          code = code + left + right
        }
        }
    } else if(el === '['){
      numberStack.push(tempNumber)
      codeStack.push(el)
      tempNumber = ''
    } else {
      codeStack.push(el)
    }
    
  }

  console.log(numberStack)
  console.log(codeStack)

  return codeStack

};
// @lc code=end
console.log(decodeString('3[a]2[bc]'))
