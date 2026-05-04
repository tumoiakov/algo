from typing import Optional
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        stackP = []
        stackQ = []
        currP = p
        currQ = q
        while stackP and stackQ or currP and currQ:
            while currP and currQ:
                if currP.val != currQ.val:
                    return False
                stackP.append(currP)
                stackQ.append(currQ)
                currP = currP.left
                currQ = currQ.left
            if currP or currQ:
                return False
            currP = stackP.pop()
            currQ = stackQ.pop()
            currP = currP.right
            currQ = currQ.right
        if currP or currQ:
                return False
        return True