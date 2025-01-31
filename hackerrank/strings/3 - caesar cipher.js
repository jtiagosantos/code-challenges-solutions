`
Challenge description: https://www.hackerrank.com/challenges/caesar-cipher-1/problem?isFullScreen=true
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

function generateLowerCaseAlphabet() {
  return [...Array(26).keys()].map((i) => String.fromCharCode(i + 97));
}

function generateUpperCaseAlphabet() {
  return [...Array(26).keys()].map((i) => String.fromCharCode(i + 65));
}

/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
   const lowerCaseAlphabet = generateLowerCaseAlphabet();
   const upperCaseAlphabet = generateUpperCaseAlphabet();
   const string = s.split('');
   
   for(let i=0; i<string.length; i++) {
      const char = string[i];
      
      if (char.match(/[A-Z|a-z]/g)) {
        let charIndex = lowerCaseAlphabet.indexOf(char.toLowerCase());
        let index = k - 1;
        
        while(index >= 0) {
          charIndex++;
          if (charIndex > 25) {
            charIndex = 0;
          }
          index--;
        }
        
        let newChar;
        
        if (lowerCaseAlphabet.includes(char)) {
          newChar = lowerCaseAlphabet[charIndex];
        } else {
          newChar = upperCaseAlphabet[charIndex];
        }
        
        string[i] = newChar;
      }
   }
   
   return string.join('');
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const s = readLine();

  const k = parseInt(readLine().trim(), 10);

  const result = caesarCipher(s, k);

  ws.write(result + '\n');

  ws.end();
}
