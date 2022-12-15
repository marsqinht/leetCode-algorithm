/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 * [7,1,5,3,6,4]
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0
  for (let i = 0; i < prices.length; i++) {
    let minPrize = prices[0];
    const price = prices[i];
    for (let j = 0; j < i; j++) {
      const currPrize = prices[j]
      if(currPrize <= minPrize) {
        minPrize = currPrize
      } 
    }
    if(price - minPrize >= profit) {
      profit = price - minPrize
    }
  }

  return profit
};
// @lc code=end

