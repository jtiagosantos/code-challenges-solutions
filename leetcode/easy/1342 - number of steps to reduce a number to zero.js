`
Challenge description: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/submissions/1510744522/
`

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  let steps = 0;

  while(num > 0) {
      if (num % 2 === 0) num /= 2;
      else num -= 1;
      steps++
  }

  return steps;
};