`
Challenge description: https://leetcode.com/problems/running-sum-of-1d-array/description/
`

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let accumulator = 0;

  for (let i=0; i<nums.length; i++) {
      accumulator += nums[i];
      nums[i] = accumulator;
  }

  return nums;
};