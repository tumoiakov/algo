class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        l = 0
        for i in range(len(s)-1, -1, -1):
            if not s[i].isspace():
                l += 1
            elif l > 0 and s[i].isspace():
                break
        return l