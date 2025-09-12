function majorityElement(nums: number[]): number {
    let candidate, count = 0, n = nums.length;
    for (let i = 0; i < n; i++) {
        if (count === 0) candidate = nums[i];
        if (nums[i] === candidate) count++;
        else count--;
    }
    return candidate;
};