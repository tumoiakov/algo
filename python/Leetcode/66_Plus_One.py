from typing import List

class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        o = 1
        for i in range(len(digits)-1, -1, -1):
            digits[i] += o
            if digits[i] > 9:
                digits[i] -= 10
                o = 1
            else:
                o = 0
        if o == 1:
            digits.insert(0, 1)
        return digits