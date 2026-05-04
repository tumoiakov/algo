from typing import Optional
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True
        stackL = []
        stackR = []
        currL = root.left
        currR = root.right
        while stackL and stackR or currL and currR:
            while currL and currR:
                if currL.val != currR.val:
                    return False
                stackL.append(currL)
                stackR.append(currR)
                currL = currL.left
                currR = currR.right
            if currL or currR:
                return False
            currL = stackL.pop()
            currR = stackR.pop()
            currL = currL.right
            currR = currR.left
        if currL or currR:
            return False
        return True

