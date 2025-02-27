`
Challenge description: https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/
`

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  for(let i=0, size=arr.length; i<size; i++) {
    arr[i] = fn(arr[i], i);
  }

  return arr;
};