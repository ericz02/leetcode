/*
  Leetcode 414. Third Maximum Number
  https://leetcode.com/problems/third-maximum-number/
*/

var thirdMax = function(nums) {
  
  // create 3 different variables to keep track of the 3 maxes

  // max is the first element in the array
  let max = nums[0]
  let secondMax = -Infinity
  let thirdMax = -Infinity

  // loop through the array starting with the second element
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]

    // if the current num is greater than max
    if (num > max) {
      // set max to secondMax
      // set secondMax to thirdMax
      // set thirdMax to num
      thirdMax = secondMax
      secondMax = max
      max = num
    } else if (num > secondMax && num < max) {
      // if the current num is greater than secondMax and less than max
      // set secondMax to thirdMax
      // set thirdMax to num
      thirdMax = secondMax
      secondMax = num
    } else if (num > thirdMax && num < secondMax) {
      // if the current num is greater than thirdMax and less than secondMax
      // set thirdMax to num
      thirdMax = num
    }
  }

  return thirdMax === -Infinity ? max : thirdMax
  
}