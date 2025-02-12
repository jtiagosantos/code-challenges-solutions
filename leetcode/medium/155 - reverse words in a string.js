`
Challenge description: https://leetcode.com/problems/reverse-words-in-a-string/description
`

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.split(' ').filter((word) => !!word).reverse().join(' ');
};