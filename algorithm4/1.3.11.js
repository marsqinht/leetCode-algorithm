
function evaluatePostfix(string) {
  const stack = []
  const operatorStack = []
  const operators = ['+', '-', '*', '/']

  string = `(${string.split(' ').join('')})`

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

  console.log('stack :>> ', stack, operatorStack);
  return stack?.[0]
}


const str = '(2-1 + 2)'

[2,1, 2]
[-,+]
console.log(evaluatePostfix(str));