class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        res = 0
        for ch in columnTitle:
            num = ord(ch) - ord('A') + 1
            res = res * 26 + num
        return res

    # def titleToNumber(self, columnTitle: str) -> int:
    #     res = 0
    #     l = len(columnTitle)
    #     for i in range(l):
    #         num = ord(columnTitle[l - i - 1]) - ord('A') + 1
    #         res += num * 26**i
    #     return res
    
   
