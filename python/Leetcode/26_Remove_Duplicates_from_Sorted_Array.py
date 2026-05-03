from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        k = 0
        for i in range(1, len(nums)):
            if nums[i] != nums[k]:
                k += 1
                if k != i:
                    nums[k] = nums[i]                      
        return k + 1
    

print(Solution().removeDuplicates([1,1,2]))