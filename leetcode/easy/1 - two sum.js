`
Challenge description: https://leetcode.com/problems/two-sum/description/
`

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const sorted = [...nums].sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;

  while(left < right) {
      const sum = sorted[left] + sorted[right];

      if (sum < target) {
      left++;
      } else if (sum > target) {
      right--;
      } else {
      const leftIndex = nums.findIndex((i) => i === sorted[left]);
      const rightIndex = nums.findLastIndex((i) => i === sorted[right]);
      return [leftIndex, rightIndex];
      }
  }
};