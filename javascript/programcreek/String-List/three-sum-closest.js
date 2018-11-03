/*
Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

For example, given array S = {-1 2 1 -4}, and target = 1. 
The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/
/**
 * Function iterate through the array and find the closest 3 array sum value and the array elements
 * @param {*} nums array of numbers
 * @param {*} target The target
 */
function threeSumClosest(nums, target) {
    nums.sort((a,b) => a-b);
    let m = Number.MAX_VALUE, result = [];
    for (let [i, val] of nums.entries()) {
        let j = i+1, k = nums.length - 1 ;
        while (j < k) {
            const sum = nums[j] + nums[k] + val;
            result = Math.abs(target - sum) < m ? [val, nums[j], nums[k]] : result;
            m = Math.abs(target - sum) < m ? Math.abs(target - sum) : m;
            if ( sum <= target) {
                j++;
            } else  {
                k--;
            }
        }
    }
    return { min: m, content: result };
}

console.log(threeSumClosest([2,7,11,15], 19));