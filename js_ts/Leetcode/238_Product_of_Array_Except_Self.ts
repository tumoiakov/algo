// O(n) time, O(n) space
function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const res = new Array(n);
    const left = new Array(n);
    const right = new Array(n);
    left[0] = 1;
    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }
    right[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }
    for (let i = 0; i < n; i++) {
        res[i] = left[i] * right[i];
    }
    return res;
};

// O(n) time, O(1) space
function productExceptSelf_1(nums: number[]): number[] {
    const n = nums.length;
    const res = new Array(n);
    res[0] = 1;
    for (let i = 1; i < n; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= right;
        right *= nums[i];
    }
    return res;
};