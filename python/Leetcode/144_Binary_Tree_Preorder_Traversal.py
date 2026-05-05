from typing import List, Optional
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        stack: List[TreeNode] = []
        curr = root
        result: List[int] = []
        while stack or curr:
            while curr:
                stack.append(curr)
                result.append(curr.val)
                curr = curr.left
            curr = stack.pop()
            curr = curr.right
        return result
