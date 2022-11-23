
/**
 * 编写一个过滤器，将算术表达式由中序表达式转为后序表达式。
 * ((1+2)*((3-4)*(5-6)))
 */
function InfixToPostfix(string) {
  const stack = []
  const operatorStack = []
  const operators = ['+', '-', '*', '/']

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

  return stack
}

const str = '(3+2)*2'

console.log(InfixToPostfix(str));