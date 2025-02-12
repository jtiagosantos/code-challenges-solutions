`
Challenge description: https://leetcode.com/problems/reverse-vowels-of-a-string/description/
`

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s = s.split('');
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
      while(!vowels.includes(s[left]) && left < right) {
        left++;
      }
      while(!vowels.includes(s[right]) && right > left) {
        right--;
      }

      if (s[left] !== s[right]) {
        [s[left], s[right]] = [s[right], s[left]];
      }

      left++;
      right--;
    }

    return s.join('');
};