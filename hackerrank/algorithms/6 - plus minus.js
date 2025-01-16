`
Challenge description: https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
`

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  const totalNumbers = arr.length;
  const quantityOfPositiveNumbers = (arr.filter((item) => item > 0)).length;
  const quantityOfNegativeNumbers = (arr.filter((item) => item < 0)).length;
  const quantityOfZeros = (arr.filter((item) => item === 0)).length;
  
  const ratioOfPositive = (quantityOfPositiveNumbers / totalNumbers).toFixed(6);
  const ratioOfNegative = (quantityOfNegativeNumbers / totalNumbers).toFixed(6);
  const ratioOfZero = (quantityOfZeros / totalNumbers).toFixed(6);
  
  console.log(ratioOfPositive);
  console.log(ratioOfNegative);
  console.log(ratioOfZero);
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  plusMinus(arr);
}
