`
Challenge description: https://leetcode.com/problems/richest-customer-wealth/description/
`

function sum(array) {
  return array.reduce((value, acc) => acc + value, 0)
}

/**
* @param {number[][]} accounts
* @return {number}
*/
var maximumWealth = function(accounts) {
  let maxWealth = 0;

  for(let i=0; i<accounts.length; i++) {
      const customerWealth = sum(accounts[i]);

      if (customerWealth > maxWealth) {
          maxWealth = customerWealth;
      }
  }

  return maxWealth;
};