from typing import List
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        el = nums[0]
        count = 1
        for i in range(1, len(nums)):
            if nums[i] == el:
                count += 1
            elif count == 0:
                el = nums[i]
                count = 1
            else:
                count -= 1
        return el
