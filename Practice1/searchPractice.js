'use strict'

function binarySearch(input, target) {
  const halfArray = input.filter(item => item >= target);
  console.log(halfArray);
  return halfArray;
}

binarySearch([1,2,3,4,5,6,7,8], 5)
module.exports = binarySearch
