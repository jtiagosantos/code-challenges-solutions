`
Challenge description: https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true
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

function handleGrade(grade) {
  if (grade < 38) return grade;
  
  let nextMultipleOfFive = grade + 1;
  
  while(nextMultipleOfFive % 5 !== 0) {
    nextMultipleOfFive++;
  }
  
  const difference = nextMultipleOfFive - grade;
  
  if (difference < 3) return nextMultipleOfFive;
  
  return grade;
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  for (let i=0; i<grades.length; i++) {
    const grade = handleGrade(grades[i]);
    grades[i] = grade;
  }
  
  return grades;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const gradesCount = parseInt(readLine().trim(), 10);

  let grades = [];

  for (let i = 0; i < gradesCount; i++) {
      const gradesItem = parseInt(readLine().trim(), 10);
      grades.push(gradesItem);
  }

  const result = gradingStudents(grades);

  ws.write(result.join('\n') + '\n');

  ws.end();
}
