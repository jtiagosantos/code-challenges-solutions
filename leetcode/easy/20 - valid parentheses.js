`
Challenge description: https://leetcode.com/problems/valid-parentheses/description/
`

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 !== 0) return false;

  while(s.includes('[]') || s.includes('{}') || s.includes('()')) {
    s = s.replace('[]', '').replace('{}', '').replace('()', '');
  }

  return s === '';
};