function removeDuplicates(nums: number[]): number {
  let k = 0;
  for (let num of nums) {
    if (k < 1 || nums[k - 1] !== num) {
      nums[k] = num;
      k++;
    }
  }
  return k;
}
