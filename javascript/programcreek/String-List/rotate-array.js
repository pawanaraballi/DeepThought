/*
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4]. How many different ways do you know to solve this problem?
*/

/**
 * function to rotate the number with the specified number
 * @param {*} nums list or array
 * @param {*} k integer value to rotate
 */
function rotate(nums, k) {
    k = k > nums.length ? k % nums.length : k;
 
    for(let i=0; i < k; i++){
        nums.unshift(nums.pop());
    }

    return nums;
}

console.log(rotateUsingIntermediateArray([1,2,3,4,5], 2));