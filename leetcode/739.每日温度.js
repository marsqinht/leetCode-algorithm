/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {

  if(!temperatures.length) return []
  let result = []
  let pos = 0
  
  while(pos < temperatures.length) {
    console.log(pos)
    let count = 0
    let flag = false
    for (let i = pos; i < temperatures.length; i++) {
      const temperature = temperatures[i];
      console.log(temperature, temperatures[pos])
      if(temperature <= temperatures[pos]) {
        count +=1
      } else {
        console.log(temperature, temperatures[pos])
        flag = true
        break
      }
    }
    result.push(flag ? count : 0)
    pos +=1
  }

  return result

};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))
// @lc code=end

