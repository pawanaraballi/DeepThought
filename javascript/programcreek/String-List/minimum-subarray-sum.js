/*
Given an array of n positive integers and a positive integer s, find the minimal length of a subarray of which the sum ≥ s. If there isn't one, return 0 instead.

For example, given the array [2,3,1,2,4,3] and s = 7, the subarray [4,3] has the minimal length of 2 under the problem constraint.
*/

/**
 * Function determines the minimum sum sub array to reach the target
 * @param {*} arr list of numbers
 * @param {*} s the number/target
 */
function minSubArraySum(arr, s) {
    if (arr.length === 0 || arr === null) return 0; 
    let min = Number.MAX_VALUE, sum = 0, start = 0, result = [], i = 0;
    while (i <= arr.length) {
        if (sum >= s) {
            result = i - start + 1 < min ? arr.slice(start, i+1) : result;
            min = i - start + 1 < min ? i - start : min;
            sum -= arr[start];
            start++;
        } else {
            if (i == arr.length) break;
            sum += arr[i];
            i++;
        }
    }
    return {min, result};
}

console.log(minSubArraySum([2,3,1,2,4,3], 7));