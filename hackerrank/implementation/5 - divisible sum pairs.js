`
Challenge description: https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true
`

'use strict';

const fs = require('fs');

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
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k -> target
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
  let numberOfPairs = 0;
  
  while(ar.length > 1) {
    const pivot = ar.shift();
    for (const num of ar) {
      if ((num + pivot) % k === 0) numberOfPairs++;
    }
  }
  
  return numberOfPairs;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const n = parseInt(firstMultipleInput[0], 10);

  const k = parseInt(firstMultipleInput[1], 10);

  const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

  const result = divisibleSumPairs(n, k, ar);

  ws.write(result + '\n');

  ws.end();
}
