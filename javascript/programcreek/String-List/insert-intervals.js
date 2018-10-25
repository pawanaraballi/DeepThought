/**
 * Given that the intervals are already sorted
 * @param {*} intervals sorted intervals
 * @param {*} newInterval new Interval to be inserted
 */
function insertAndMerge(intervals, newInterval) {
    const result = [];
    for ( let curr of intervals) {
        if (curr[1] < newInterval[0]) {
            result.push(curr);
        } else if ( curr[0] > newInterval[1]) {
            result.push(newInterval);
            newInterval = curr;
        } else if (curr[1] >= newInterval[0] || curr[0] <= newInterval[1]) {
            newInterval = [Math.min(curr[0], newInterval[0]), Math.max(curr[1], newInterval[1])];
        }
    }
    result.push(newInterval);
    return result;
}

console.log(insertAndMerge([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,9]));