const {
  majorityElement
} = require('../../src/array/majorityElement');

test('最大众数', () => {
  expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toEqual(2);
  // expect(arrayPairSumII([6214, -2290, 2833, -7908])).toEqual(-5075);
});