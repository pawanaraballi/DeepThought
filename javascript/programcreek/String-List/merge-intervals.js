/*
Given a collection of intervals, merge all overlapping intervals.

For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].
*/

/**
 * Function merges the duplicate intervals
 * @param {*} intervals list of list of intervals 
 */
function merge(intervals) {
    intervals.sort((i, j) => i[1]-j[1]);
    let prev = intervals[0];
    const result = [];
    for (let ele of intervals) {
        if (ele[0] > prev[1]) {
            result.push(prev);
            prev = ele;
        } else {
            // Merge the Intervals
            prev = [prev[0], Math.max(prev[1], ele[1])];
        }
    }
    result.push(prev);
    return result;
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));