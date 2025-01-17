`
Challenge description: https://leetcode.com/problems/pascals-triangle/description/
`

function makeLine(line) {
  if (!line) return [1];
  if (line.length === 1) return [1, 1];

  const newLine = [];
  let index = 0;
  const lastIndex = line.length - 1;

  while(index <= lastIndex) {
      if (index === 0) {
          newLine.push(1);
          newLine.push(line[index] + line[index + 1]);
      } else if (index === lastIndex) {
          newLine.push(1);
      } else {
          newLine.push(line[index] + line[index + 1]);
      }
      index++
  }

  return newLine;
}

/**
* @param {number} numRows
* @return {number[][]}
*/
var generate = function(numRows) {
  let index = 1;
  const pascalsTriangle = [];

  while(index <= numRows) {
      const line = makeLine(pascalsTriangle.at(-1));
      pascalsTriangle.push(line);
      index++;
  }

  return pascalsTriangle;
};