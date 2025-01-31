`
Challenge description: https://www.hackerrank.com/challenges/pangrams/problem?isFullScreen=true
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

const TOTAL_LETTERS_IN_ENGLISH_ALPHABET = 26;

/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
  const string = s.replaceAll(' ', '').toLowerCase().split('');
  let alphabetLettersInString = '';
  
  for(const char of string) {
    if (!alphabetLettersInString.includes(char)) {
      alphabetLettersInString += char;
    }
  }
  
  const isPangram = alphabetLettersInString.length === TOTAL_LETTERS_IN_ENGLISH_ALPHABET;
  
  return isPangram ? 'pangram' : 'not pangram';
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = pangrams(s);

  ws.write(result + '\n');

  ws.end();
}
