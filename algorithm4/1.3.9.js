
/**  
 * 编写一段程序，从标准输入得到一个缺少左括号的表达式并打印出补全括号之后的中序表达式。例如，给定输入：[插图]你的程序应该输出：[插图]
 * 1 + 2 ) ＊ 3-4 ) ＊ 5-6 ) ) )
 * ( ( 1 + 2 ) ＊ ( ( 3-4 ) ＊ ( 5-6 ) ) )
 */

function completeBrackets(string) {
  const operators = ['+', '-', '*', '/']
  const rightBracket = ')'
  const numberStack = []
  const operatorStack = []

  for (let i = 0; i < string.length; i++) {
    const el = string[i];

    if(Number.isInteger(Number(el))) {
      numberStack.push(el)
    } 
    else if(operators.includes(el)) {
      operatorStack.push(el)
    } 
    else if (el === ')'){
      const second = numberStack.pop()
      const first = numberStack.pop()
      const operator = operatorStack.pop()
      numberStack.push(`(${first}${operator}${second})`)
    } else {
      throw new Error('invalid Symbol')
    }
  }

  return numberStack.pop()
}


console.log('completeBrackets :>> ', completeBrackets('1+2)*3-4)*5-6)))'));