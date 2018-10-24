/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

For example, given [3,2,1,5,6,4] and k = 2, return 5.
*/

/**
 * Sort the array and get the kth element from the last index
 * @param {*} nums Unsorted List
 * @param {*} k kth element
 */
function findKthLargest(nums, k) {
    return nums.sort()[nums.length -k];
}

console.log(findKthLargest([3,2,1,5,6,4], 2));