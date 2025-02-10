`
Challenge description: https://www.hackerrank.com/challenges/strong-password/problem?isFullScreen=true
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

function checkCondition(str, condition) {
  condition = condition.split('');

  while(condition.length > 0) {
    const char = condition.shift();
    if (str.includes(char)) return true;
  }

  return false;
}

/*
* Complete the 'minimumNumber' function below.
*
* The function is expected to return an INTEGER.
* The function accepts following parameters:
*  1. INTEGER n
*  2. STRING password
*/

function minimumNumber(n, password) {
  const numbers = '0123456789';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const specialCharacters = '!@#$%^&*()-+';
  
  let count = 0;
  
  if (!checkCondition(password, numbers)) count++;
  if (!checkCondition(password, lowerCase)) count++;
  if (!checkCondition(password, upperCase)) count++;
  if (!checkCondition(password, specialCharacters)) count++;

  if ((count + n) < 6) {
    return count + (6 - (n + count));
  }
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const password = readLine();

  const answer = minimumNumber(n, password);

  ws.write(answer + '\n');

  ws.end();
}
