`
Challenge description: https://leetcode.com/problems/sort-colors/description/
`

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let left = 0;
  
  while(left < nums.length) {
    let right = nums.length - 1;

    while(left < right) {
      if (nums[left] > nums[right]) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
      }
      right--;
    }
    left++;
  }
};