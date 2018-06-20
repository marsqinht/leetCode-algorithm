const {
  twoSum,
  twoSumII
} = require('../../src/twoSum');

test('[2, 7, 11, 15] toSum', () => {
  expect(twoSum([2, 7, 11, 15], 18)).toEqual([1, 2]);
  expect(twoSumII([2, 7, 11, 15], 17)).toEqual([0, 3]);
});