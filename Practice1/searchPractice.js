'use strict'

function binarySearch(input, target) {
  const mid = Math.floor((input.length-1)/2);
  const midValue = input[mid];
  const leftArr = input.filter(item => item < midValue);
  const rightArr = input.filter(item => item > midValue);
  return input.length === 0
            ? -1 :
              (
                target === midValue
              ? mid :
                (
                  target < midValue
              ? binarySearch(leftArr,target) :
                binarySearch(rightArr,target) === -1
              ? -1 :
                mid + 1 + binarySearch(rightArr,target)
                )
              );
}
module.exports = binarySearch

function binarySearchEx(arr, target) {
  var min = 0;
  var max = arr.length - 1;
  var newArr = arr;
  console.log(newArr);
  if (min > max) {
      return -1;
  } else {
    let mid = Math.floor((min + max) / 2);
    if ( arr[mid] > target ) {
      newArr = arr.slice(min, mid);
      return binarySearchEx(newArr, target);
    } else if (arr[mid] < target ) {
      newArr = arr.slice(mid, max);
      return binarySearchEx(newArr, target);
    } else {
      return arr[mid];
    }
  }
};

console.log(binarySearchEx([1,2,3,4,5,6,7,8],5));

// 0 length-1;
//
//
// (min+max) /2
// binarySearch(arr, target, mid+1, max)
// binarySearch(arr, target, min, mid-1)
// max == min
// min > max return -1
// arr[mid] === target return mid;
