from typing import Optional, List
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if root is None:
            return False

        def findSum(node: Optional[TreeNode], sum: int) -> bool:
            if node is None:
                return False
                
            new_sum = sum + node.val
            if not node.left and not node.right:
                return new_sum == targetSum
            return findSum(node.left, new_sum) or findSum(node.right, new_sum)
        
        return findSum(root, 0)