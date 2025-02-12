`
Challenge description: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
`

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while(left < right) {
    if (numbers[left] + numbers[right] < target) {
      left++;
    } else if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      return [left + 1, right + 1];
    }
  }
};