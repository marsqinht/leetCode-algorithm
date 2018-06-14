/**
 * title: 罗马数字转整数
 * 罗马数字包含以下七种字符： I， V， X， L， C， D 和 M。
 * 
 * 字符 数值
 * I    1
 * V    5
 * X    10
 * L    50
 * C    100
 * D    500
 * M    1000
 * 
 * 输入: "IV"
 * 输出: 4
 * 
 * 输入: "IX"
 * 输出: 9
 * 
 * 输入: "MCMXCIV"
 * 输出: 1994
 */

/**
  * @param {string} s
  * @return {number}
  */
var romanToInt = str => {
  const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  const specialRomanMap = {
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
  };
  let arr = [];
  Object.keys(specialRomanMap).forEach(el => {
    let romanRxp = new RegExp(el);
    if (romanRxp.test(str)) {
      arr.push(el);   
      str = str.replace(romanRxp, '');
    } 
  });
  arr = arr.concat(str.split(''));
  let map = Object.assign(romanMap, specialRomanMap);
  let number = 0;
  for (let i = 0, len = arr.length; i < len; i++) {
    number += map[arr[i]];
    
  }
  
  return number;

};


console.log(romanToInt('IX'));