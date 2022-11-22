
/**
 * 编写一个过滤器，将算术表达式由中序表达式转为后序表达式。
 * ((1+2)*((3-4)*(5-6)))
 */
function InfixToPostfix(string) {
  const stack = []
  const operatorStack = []
  const operators = ['+', '-', '*', '/']

  for (let i = 0; i < string.length; i++) {
    const el = string[i];
    if(Number.isInteger(Number(el))) {
      stack.push(el)
    } else if (operators.includes(el)) {
      operatorStack.push(el)
    } else if(el === ')') {

      while(operatorStack.length) {
        stack.push(operatorStack.pop())
      }
    }
  }

  

  return stack.join('')
}

const str = '((1+2)*((3-4)*(5-6)))'

console.log(InfixToPostfix(str));