function removeDuplicates(nums: number[]): number {
    let k = 0;
    for (let num of nums) {
        if (k < 2 || nums[k - 2] !== num) {
            nums[k] = num;
            k++;
        }
    }
    return k;
};