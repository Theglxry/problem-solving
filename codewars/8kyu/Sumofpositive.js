/* You get an array of numbers, return the sum of all of the positives ones.
Note: if there is nothing to sum, the sum is default to 0. */

function positiveSum(arr) {
  //array reduce for sum
  return arr.reduce((a, b) => (b >= 0 ? a + b : a), 0);
}
