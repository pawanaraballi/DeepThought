/*
Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
*/

/**
 * the function find whether we can reach the target by adding two numbers in the list
 * @param {*} nums list of numbers
 * @param {*} target target number
 */
function twoSum(nums, target) {
    const map = new Map();
    for( let [i, ele] of nums.entries()) {
        if (map.has(ele)) {
            return [map.get(ele), i];
        } else {
            map.set(target-ele, i);
        }
    }
}

console.log(twoSum([2,7,11,15], 18));

// The input is sorted so we can use two pointers to solve the problem efficiently
function twoSumSorted(nums, target) {
    if (nums.length === 0) return null;
    let i = 0, j = nums.length - 1;
    while(i<j) {
        const sum = nums[i] + nums[j];
        if (sum > target) {
            j--;
        } else if (sum < target) {
            i++;
        } else {
            return [i, j];
        }
    }
    return null;
}

console.log(twoSumSorted([2,7,11,15], 18));