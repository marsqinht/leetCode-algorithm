/**
 * title: 反转整数
 * 给定一个 32 位有符号整数， 将整数中的数字进行反转。
 * 假设我们的环境只能存储 32 位有符号整数， 其数值范围是[−231, 231− 1]。 根据这个假设， 如果反转后的整数溢出， 则返回 0。
 * 
 * 示例: 
 * 输入: 123
 * 输出: 321
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 输入: 1534236469
 * 输出: 0
 */


/**
  * @param {number} x
  * @return {number}
  */
 
var reverse = x => {
  let reverse = parseInt((x + '').split('').reverse().join(''));
  let isOverflow = reverse > Math.pow(2, 31) - 1;
  return isOverflow ? 0 : x > 0 ? reverse : 0 - reverse;
};

console.log(reverse(-120));
console.log(reverse(1563847412));