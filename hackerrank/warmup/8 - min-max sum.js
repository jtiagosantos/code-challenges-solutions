`
Challenge description: https://www.hackerrank.com/challenges/mini-max-sum?isFullScreen=true
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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function sum(array) {
  return array.reduce((value, acc) => acc + value, 0);
}

function miniMaxSum(arr) {
  const array = arr.sort((a, b) => a - b);
  const minimum = sum(array.slice(0, array.length - 1));
  const maximum = sum(array.slice(1));
  
  console.log(`${minimum} ${maximum}`);
}

function main() {
  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
