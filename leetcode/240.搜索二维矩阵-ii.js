/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 * 
 * [
      [1,   4,  7, 11, 15],
      [2,   5,  8, 12, 19],
      [3,   6,  9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
]  

31
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const len = matrix.length
  let horizontal = 0
  let ordinate =  matrix.length - 1
  let stop = false

  while(horizontal < matrix.length - 1 || ordinate >=0 ) {
    const el = matrix[ordinate][horizontal]

    el && console.log('object :>> ', el, horizontal, ordinate);
    if(el === target) {
      return true
    }

    if(el > target) {
      ordinate --
      
    }

    if(el < target) {
     
      horizontal++

      console.log('11 :>> ', horizontal, matrix.length - 1);
    }
  }

  return false
};

// const arr =[
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]  

const arr = [
  [ 1, 4, 7,11,15],
  [ 2, 5, 8,12,19],
  [ 3, 6, 9,16,22],
  [10,13,14,17,24],
  [18,21,23,26,30]
]

console.log(searchMatrix(arr, 20));

// @lc code=end

