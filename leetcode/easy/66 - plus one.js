`
Challenge description: https://leetcode.com/problems/plus-one/description/
`

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  digits = digits.join('');
  digits = BigInt(digits);
  digits += BigInt(1);
  digits = String(digits);
  digits = digits.split('');
  digits = digits.map((d) => Number(d));

  return digits;
};