`
Challenge description: https://leetcode.com/problems/maximum-average-subarray-i/description
`

function calculateAvg(window, k, left, right) {
  let sum = 0;

  for(let i=left; i<=right; i++) {
    sum += window[i];
  }

  return sum / k;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let left = 0;
  let right = k - 1;
  let maxAvg = -Infinity;

  while(right < nums.length) {
    const avg = calculateAvg(nums, k, left, right);
    if (avg > maxAvg) maxAvg = avg;
    left++;
    right++;
  }

  return maxAvg
};