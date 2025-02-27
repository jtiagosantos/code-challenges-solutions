`
Challenge description: https://leetcode.com/problems/search-insert-position/description
`

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let middle;

  while(left <= right) {
      middle = parseInt((left + right) / 2);
      
      if (nums[middle] == target) {
          return middle;
      } else if (left === right) {
          if (nums[middle] > target) return middle;
          return middle + 1;
      } else if (nums[middle] > target) {
          right = middle - 1;
      } else {
          left = middle + 1;
      }
  }

  return middle;
}

/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var searchInsert = function(nums, target) {
  if (nums[0] > target) {
      return 0;
  }

  if (nums[nums.length - 1] < target) {
      return nums.length;
  }

  return binarySearch(nums, target);
};