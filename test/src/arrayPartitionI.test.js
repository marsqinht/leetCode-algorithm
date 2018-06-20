const {
  arrayPairSum,
  arrayPairSumII
} = require('../../src/array/561-arrayPartitionI');

test('[2, 7, 11, 15] toSum', () => {
  expect(arrayPairSum([6214, -2290, 2833, -7908])).toEqual(-5075);
  expect(arrayPairSumII([6214, -2290, 2833, -7908])).toEqual(-5075);
});