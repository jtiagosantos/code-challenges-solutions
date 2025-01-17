`
Challenge description: https://leetcode.com/problems/contains-duplicate/description/
`

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const distincts = new Map();
  let output = false;

  for (const num of nums) {
      if (distincts.get(num)) {
          output = true;
          break;
      } else {
          distincts.set(num, true);
      }
  }

  return output;
};