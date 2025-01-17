`
Challenge description: https://leetcode.com/problems/length-of-last-word/description/
`

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.trim();
  s = s.split(' ');
  return s.at(-1).length
};