/*
Given two sorted integer arrays A and B, merge B into A as one sorted array.
*/

/**
 * Take two sorted array and merge those sorted arrays into another
 * @param {*} a Sorted array a
 * @param {*} b Sorted array b
 */
function mergeSortedArray(a, b) {
    console.log(a, b);
    const minIndex = a.length > b.length ? b.length : a.length;
    let i = 0, j = 0;
    const result = [];
    while ( i < minIndex && j < minIndex) {
        if(a[i] < b[j]){
            result.push(a[i]);
            i++;
        } else {
            result.push(b[j]);
            j++;
        }
    }
    return [...result, ...a.slice(i, a.length), ...b.slice(j, b.length)];
}

console.log(mergeSortedArray([1, 3], [2, 4]));