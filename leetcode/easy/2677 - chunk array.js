`
Challenge description: https://leetcode.com/problems/chunk-array/description/
`

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const output = [];

  while (arr.length > 0) {
      output.push(arr.splice(0, size));
  }

  return output;
};
