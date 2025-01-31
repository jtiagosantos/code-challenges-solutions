`
Challenge description: https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem?isFullScreen=true
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
 * Complete the 'hackerrankInString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function hackerrankInString(s) {
  const target = 'hackerrank'.split('');
  const string = s.split('');

  let firstChar = target.shift();

  for(const char of string) {
    if (char === firstChar) {
      firstChar = target.shift();
    }
  }

  return target.length > 0 ? 'NO' : 'YES';
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
      const s = readLine();

      const result = hackerrankInString(s);

      ws.write(result + '\n');
  }

  ws.end();
}
