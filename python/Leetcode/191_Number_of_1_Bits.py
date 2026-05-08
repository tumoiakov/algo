class Solution:
    def hammingWeight(self, n: int) -> int:
        num = 0
        for i in range(32):
            if n & (1 << i) > 0:
                num += 1
        return num