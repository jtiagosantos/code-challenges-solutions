`
Challenge description: https://leetcode.com/problems/function-composition/submissions/1526509529/
`

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
  return function(x) {
      while(functions.length > 0) {
          const fn = functions.pop();
          x = fn(x);
      }
      return x;
  }
};

/**
* const fn = compose([x => x + 1, x => 2 * x])
* fn(4) // 9
*/