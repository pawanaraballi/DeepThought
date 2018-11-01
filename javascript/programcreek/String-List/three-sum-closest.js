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