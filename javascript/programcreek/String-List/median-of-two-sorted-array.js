/*
There are two sorted arrays A and B of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
*/

/**
 * Function to call the util function to find the median of the sorted array
 * @param {*} a Sorted List
 * @param {*} b Sorted List
 */
function medianOfTwoSortedArray(a, b) {
    const total = a.length + b.length;
    return total % 2 === 0 ? ((medianTwoSortedArrayUtil(a, b, Math.floor(total/2)+ 1, 0, 0) + medianTwoSortedArrayUtil(a, b, Math.floor(total/2), 0, 0)) / 2.0 )  : medianTwoSortedArrayUtil(a, b, Math.floor(total/2) + 1, 0, 0);
}

/**
 * Util Function to search the median, use binary search method to find the number
 * @param {*} a Sorted List
 * @param {*} b Sorted List
 * @param {*} k Mid point to divide the list/array
 * @param {*} s1 start point for list a
 * @param {*} s2 start point for list b
 */
function medianTwoSortedArrayUtil(a, b, k, s1, s2) {
    if ( s1 >= a.length) return b[s2 + k -1];
    if ( s2 >= b.length) return a[s1 + k -1];
    if ( k === 1) return Math.min(a[s1], b[s2]);
    const m1 = s1 + Math.floor(k / 2)-1;
    const m2 = s2 + Math.floor(k / 2)-1;
 
    const mid1 = m1 < a.length ? a[m1] : Number.MAX_VALUE;    
    const mid2 = m2 < b.length ? b[m2] : Number.MAX_VALUE;
 
    if ( mid1 < mid2  ){
        return medianTwoSortedArrayUtil(a, b, k-Math.floor(k/2), m1+1, s2);
    } else {
        return medianTwoSortedArrayUtil(a, b, k-Math.floor(k/2), s1, m2+1);
    }
}

console.log(medianOfTwoSortedArray([1, 2, 7, 8], [3, 4, 5, 6, 9, 10, 11, 12, 13]));