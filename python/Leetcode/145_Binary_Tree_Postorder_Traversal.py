from typing import List, Optional
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []
        stack = []
        curr = root
        while stack or curr:
            if curr:
                stack.append(curr)
                curr = curr.left
            curr = stack.pop()
            if curr.right():
                temp = curr.right
                curr.right = None
                stack.append(curr)
                curr = temp
            else:
                result.append(curr.val)
        return result
    # recursive
    # def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
    #     result = []

    #     def traversal(node):
    #         if not node:
    #             return
    #         if node.left:
    #             traversal(node.left)
    #         if node.right:
    #             traversal(node.right)
    #         result.append(node.val)
    #     return result
        