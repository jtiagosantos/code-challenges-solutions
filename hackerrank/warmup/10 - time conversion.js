`
Challenge description: https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true
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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  const timeTerms = {
    AM: 'AM',
    PM: 'PM',
  };

  const hourPMTOAM = {
    0: 12,
    1: 13,
    2: 14,
    3: 15,
    4: 16,
    5: 17,
    6: 18,
    7: 19,
    8: 20,
    9: 21,
    10: 22,
    11: 23,
    12: 12,
  };

  const hourAMTOPM = {
    12: '00',
    1: '01',
    2: '02',
    3: '03',
    4: '04',
    5: '05',
    6: '06',
    7: '07',
    8: '08',
    9: '09',
    10: 10,
    11: 11,
  }

  const term = s.replace(/[0-9:]/g, '');
  const hour = Number(s.replace(/^(\d{2}):.*/, "$1"));

  if (term === timeTerms.AM) {
    const newHour = hourAMTOPM[hour];
    return s.replace(/^\d{2}/g, newHour).replace(timeTerms.AM, '');
  }

  const newHour = hourPMTOAM[hour];
  return s.replace(/^\d{2}/g, newHour).replace(timeTerms.PM, '');
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + '\n');

  ws.end();
}
