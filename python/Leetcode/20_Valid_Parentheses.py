class Solution:
    def isValid(self, s: str) -> bool:
        closing = {')': '(', '}': '{', ']': '['}
        opened = []
        for c in s:
            if c not in closing:
                opened.append(c)
            elif len(opened) == 0 or opened.pop() != closing[c]:
                return False
        return len(opened) == 0