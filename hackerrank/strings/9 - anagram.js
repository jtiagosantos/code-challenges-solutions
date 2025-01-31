`
Challenge description: https://www.hackerrank.com/challenges/anagram/problem?isFullScreen=true
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
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function anagram(s) {
  if (s.length % 2 !== 0) return -1;

  const halfIndex = s.length / 2;
  const s1 = s.slice(0, halfIndex).split('');
  const s2 = s.slice(halfIndex).split('');

  let charactersToChange = 0;

  for(const index in s1) {
    const char = s1[index];
    if (s2.includes(char)) {
      const charIndexInS2 = s2.indexOf(char);
      s2.splice(charIndexInS2, 1);
    } else {
      charactersToChange++;
    }
  }

  return charactersToChange;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
      const s = readLine();

      const result = anagram(s);

      ws.write(result + '\n');
  }

  ws.end();
}
