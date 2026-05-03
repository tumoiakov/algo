from typing import List

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        k = len(nums) - 1
        for i in range(k, -1, -1):
            if nums[i] == val:
                if i != k:
                    nums[i], nums[k] = nums[k], nums[i]
                k -= 1
        return k + 1

print(Solution().removeElement([0,1,2,2,3,0,4,2], 2))