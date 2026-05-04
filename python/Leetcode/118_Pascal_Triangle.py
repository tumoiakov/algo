from typing import List
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        result = [[1]]
        for i in range(1, numRows):
            layer = [1]
            for j in range(1, i):
                layer.append(result[i - 1][j - 1] + result[i - 1][j])
            layer.append(1)
            result.append(layer)
        return result
    # def generate(self, numRows: int) -> List[List[int]]:
    #     result = []
    #     for i in range(0, numRows):
    #         layer = [1]
    #         for j in range(1, i + 1):
    #             layer.append(layer[j - 1] * (i - j + 1) // j)
    #         result.append(layer)
    #     return result

