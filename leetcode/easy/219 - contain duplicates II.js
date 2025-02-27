`
Challenge description: https://leetcode.com/problems/contains-duplicate-ii/description
`

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const counter = new Map();

  for(let i=0, size=nums.length; i<size; i++) {
    if (counter.get(nums[i]) === undefined) {
      counter.set(nums[i], i);
    } else {
      if (Math.abs(counter.get(nums[i]) - i) <= k) {
        return true;
      } else {
        counter.set(nums[i], i);
      }
    }
  }

  return false;
};