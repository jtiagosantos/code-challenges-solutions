`
Challenge description: https://leetcode.com/problems/intersection-of-two-arrays/description/
`

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const intersection = {};

  nums1.forEach((num) => {
      if (nums2.includes(num) && !intersection[num]) {
          intersection[num] = true;
      }
  });

  return Object.keys(intersection).map(Number);
};