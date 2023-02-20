/**
 * Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
 */

// Solution 1: For loop
// O(n^2) time | O(1) space
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === targetSum && i !== j) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
}

// Solution 2: Hash Table
// time O(n) space O(n)
function twoNumberSum(array, targetSum) {
  const nums = {};
  for (const num of array) {
    const potentialSum = targetSum - num;
    if (nums[potentialSum]) {
      return [potentialSum, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

// Solution 3: Pointers
// Time O(nlogn) space O(1)
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum > targetSum) {
      right--;
    } else if (currentSum < targetSum) {
      left++;
    }
  }
  return [];
}
