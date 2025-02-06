`
Challenge description: https://leetcode.com/problems/generate-fibonacci-sequence/submissions/1526601128/
`

/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
  let current = 0;
  let next = 1;

  while(true) {
      yield current;
      [current, next] = [next, current + next];
  }
};

/**
* const gen = fibGenerator();
* gen.next().value; // 0
* gen.next().value; // 1
*/