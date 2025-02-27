`
Challenge description: https://leetcode.com/problems/to-be-or-not-to-be/description/
`

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
  function toBe(v) {
      if (v === val) return true;
      throw "Not Equal";
  }

  function notToBe(v) {
      if (v === val) throw "Equal";
      return true;
  }

  return {
      toBe,
      notToBe,
  }
};

/**
* expect(5).toBe(5); // true
* expect(5).notToBe(5); // throws "Equal"
*/