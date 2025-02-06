`
Challenge description: https://leetcode.com/problems/array-reduce-transformation/submissions/1526424708/
`

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  while(nums.length > 0) {
      init = fn(init, nums.shift());
  }
  return init;
};