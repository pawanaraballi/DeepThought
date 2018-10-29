/*
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

For example, given array S = {-1 0 1 2 -1 -4},

    A solution set is:
    (-1, 0, 1)
    (-1, -1, 2)
*/

/**
 * the function adds the combination of numbers to check whether it would add to Zero
 * @param {*} nums list of numbers which might add upto 0
 */
function threeSum(nums) {
    const result = [];
    if (nums === null || nums.length < 3) return result;
    nums.sort();
    for (let i in nums) {
        i = parseInt(i);
        if (i === 0 || nums[i] > nums[i-1]) {
            let j = i + 1, k = nums.length - 1;
            while (j < k ){
                if (nums[i] + nums[j] + nums[k] === 0) {
                    result.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;
                    while (j < k && nums[j] === nums[j-1]) j++;
                    while (j < k && nums[k] === nums[k+1]) k--;
                } else if (nums[i]+nums[j]+nums[k] < 0) {
                    j++;
                } else  {
                    k--;
                }
            }
        }
    }
    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));