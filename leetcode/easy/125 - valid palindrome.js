`
Challenge description: https://leetcode.com/problems/valid-palindrome/description/
`

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const raw = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  return raw === raw.split('').reverse().join('');
};