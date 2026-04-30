function canJump(nums: number[]): boolean {
    const n = nums.length;
    if (n === 1) return true;

    let maxR = 0;
    for (let i = 0; i < n; i++) {
        if (i > maxR) {
            return false;
        }

        if (i + nums[i] > maxR) {
            maxR = i + nums[i];
        }

        if (maxR >= n - 1) {
            return true;
        }
    }
    return false;
};