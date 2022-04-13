/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 * [7,1,5,3,6,4]
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  for(i = 0; i < prices.length; i++) {
    if(i > 0 && prices[i] > prices[i -1]) {
      profit += prices[i] - prices[i -1]
    }
  }
  return profit
};
// @lc code=end

