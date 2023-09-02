/*
  Leetcode 1029. Two City Scheduling
  https://leetcode.com/problems/two-city-scheduling/
*/

/*
  - Sort in descending order
    take absolute difference and sort from largest impact to smallest impact

  - Set a cap! the cap per cityA and cityB is --> cap = costs.length / 2
    2N = length of the array
    N = length of the array / 2

  - Have counters for each city to keep track of how many people are going to that city

  - When adding to the sum we pick the city with the lower cost..
    as long as that city is under the cap
  

*/

// Time: O(n log n) sort is the most expensive
// Space: O(1) constant space
var twoCitySchedCost = function(costs) {

  costs.sort((a, b) => {
    return Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1])
  })

  let sum = 0
  let cap = costs.length / 2
  let A = 0
  let B = 0

  for (let i = 0; i < costs.length; i++) {
    let costA = costs[i][0]
    let costB = costs[i][1]

    // if city A is cheaper
    if (costA <= costB) {
      // if city A is under the cap
      if (A < cap) {
        // send to city A
        sum += costA
        A++
      } else {
        // if we reach the cap N, send to city B even if it's more expensive
        sum += costB
        B++
      }
    } else {
      // if city B is cheaper
      // if city B is under the cap
      if (B < cap) {
        // send to city B
        sum += costB
        B++
      } else {
        // if we reach the cap N, send to city A even if it's more expensive
        sum += costA
        A++
      }
    }
  }

  return sum;
  
}