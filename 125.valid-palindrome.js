/**
 * 
 * @param {string} s 
 * @return {boolean}
 * 
 * Leetcode 125. valid-palindrome
 * https://leetcode.com/problems/valid-palindrome/
 */

var isPalindrome = function(s) {

  s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');

  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
}

// We are use javascript functions to simplify it:

// var isPalindrome = function (s) {
//   s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
//   return s === s.split('').reverse().join('');
// };


console.log(isPalindrome("race a car"))