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

// 挑出特殊情况组成数组, 常规情况组成数组 然后相加 'MCMXCIV' --> ['M', 'CM', 'XC', 'IV'] -->[1000, 900, 90, 4] --> 1994
const romanToInt = str => {
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
  const map = Object.assign(romanMap, specialRomanMap);

  return Object.keys(specialRomanMap)
    .filter(el=> {
      let romanRxp = new RegExp(el);
      if (romanRxp.test(str)) { 
        str = str.replace(romanRxp, '');
        return true;
      }
      return false;
    })
    .concat(str.split(''))
    .map(el => {
      return map[el];
    })
    .reduce((prev, next)=> {
      return prev + next;
    });

};


// 所有按常规相加, 特殊情况实际多加了2* prev 判断相减即可
var romanToIntII = s => {
  let map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let prev;
  let num = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    num += map[s[i]];
    if (prev && map[prev] < map[s[i]]) {
      num -= map[prev] * 2;
    }

    prev = s[i];
  }

  return num;
};


console.log(romanToInt('IX'));
console.log(romanToIntII('MCMXCIV'));