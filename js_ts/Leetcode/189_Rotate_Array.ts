// with additional space O(n)
function rotate_1(nums: number[], k: number): void {
    let i = 0, n = nums.length;
    k = k % nums.length

    let temp: number[] = [];
    for (let i = 0; i < n - k; i++) {
        temp[i + k] = nums[i];
    }
    let j = n - k;
    for (let i = j; i < n; i++) {
        temp[i - j] = nums[i];
    }
    for (let i = 0; i < n; i++) {
       nums[i] = temp[i];
    }
};

function reverse(nums: number[], i, j) {
    while (i < j) { 
        let temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
        i++;
        j--;
    }
}

// with additional space O(1)
function rotate_2(nums: number[], k: number): void {
    let n = nums.length;
    k = k % n;
    
    reverse(nums, 0, n - 1); // reverse all array
    reverse(nums, k, n - 1); // reverse main part of array
    reverse(nums, 0, k - 1); // reverse shifted part of array
};