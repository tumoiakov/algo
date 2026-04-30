function jump(nums: number[]): number {
    const n = nums.length;
    if (n === 1) return 0;

    let l = 0, r = 0, count = 0;

    while (r < n - 1) {
        let max = 0
        for (let i = l; i <= r; i++) {
            max = Math.max(max, i + nums[i]);
        }
        l = r + 1;
        r = max;
        count++;
    }
    return count;
};