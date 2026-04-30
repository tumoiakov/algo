
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        result: int = 0
        val = x
        while val > 0:
            mod = val % 10
            result = result * 10 + mod
            val = val // 10
        
        return True if result == x else False
        