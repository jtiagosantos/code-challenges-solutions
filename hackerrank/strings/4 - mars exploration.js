`
Challenge description: https://www.hackerrank.com/challenges/mars-exploration/problem?isFullScreen=true
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

function handleSlice(slice) {
  const [a, b, c] = slice;
  let diff = 0;
  
  if (a !== 'S') diff++;
  if (b !== 'O') diff++;
  if (c !== 'S') diff++;
  
  return diff;
}

/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
  s = s.split('');
  let acc = 0;
  
  while(s.length > 0) {
    const slice = s.splice(0, 3);
    const diff = handleSlice(slice);
    acc += diff;
  }
  
  return acc;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = marsExploration(s);

  ws.write(result + '\n');

  ws.end();
}
