`
Challenge description: https://www.hackerrank.com/challenges/funny-string/problem?isFullScreen=true
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

function handleString(string) {
  const arrayOfCharCodes = string.split('').map((char) => char.charCodeAt(0));
  const differenceForString = [];

  for(let i=0; i<string.length-1; i++) {
    const current = arrayOfCharCodes[i];
    const next = arrayOfCharCodes[i + 1];
    const difference = Math.abs(current - next);
    differenceForString.push(difference);
  }

  return differenceForString;
}

function checkAreArraysEqual(arr1, arr2) {
  return arr1.toString() === arr2.toString();
}

/*
 * Complete the 'funnyString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function funnyString(s) {
  const normalString = s;
  const reversedString = s.split('').reverse().join('');

  const differenceForNormalString = handleString(normalString);
  const differenceForReversedString = handleString(reversedString);

  const areArraysEqual = checkAreArraysEqual(differenceForNormalString, differenceForReversedString);

  return areArraysEqual ? 'Funny' : 'Not Funny';
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
      const s = readLine();

      const result = funnyString(s);

      ws.write(result + '\n');
  }

  ws.end();
}
