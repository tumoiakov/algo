from typing import List
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) <= 1:
            return 0
        profit = 0
        min = prices[0]
        for i in range(0, len(prices)):
            if prices[i] < min:
                min = prices[i]
            if prices[i] - min > profit:
                profit = prices[i] - min
        return profit
