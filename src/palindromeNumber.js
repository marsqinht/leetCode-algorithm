/**
 * title: 回文数
 * 判断一个整数是否是回文数。 回文数是指正序（ 从左向右） 和倒序（ 从右向左） 读都是一样的整数。
 * 
 * 示例: 
 * 输入: 121
 * 输出: true
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 - 121。 从右向左读, 为 121 - 。因此它不是一个回文数。
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01。 因此它不是一个回文数。
 */

/**
  * @param {number} x
  * @return {boolean}
  */

// 转化字符串后反转与之前相等
const isPalindrome = x => parseInt(x.toString().split('').reverse().join('')) === x;


// 转化字符串后遍历，对等的索引对应值相等
const isPalindromeII = x => {
  const strNum = x.toString();
  if (x < 0 || (x % 10 == 0 && x != 0)) return false;
  for (let i = 0, len = strNum.length; i < len; i++) {
    if (strNum[i] !== strNum[len - 1 - i]) return false;
  }
  return true;
};


//进阶: 不将整数转为字符串来解决
// 回文数规律 通过求余运算来求各个位上的数，通过除法运算来降位
const isPalindromeIII = x => {
  if (x < 0 || (x % 10 == 0 && x != 0)) return false;
  let temp = 0;
  let number = x;
  while (number) {
    temp = temp * 10 + (number % 10);
    number = parseInt(number / 10);
  }
  return temp === x;
};



console.log(isPalindrome(121));
console.log(isPalindromeII(-121));
console.log(isPalindromeIII(10));
