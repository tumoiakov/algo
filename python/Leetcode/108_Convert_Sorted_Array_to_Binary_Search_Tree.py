from typing import List, Optional
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        if not nums:
            return None
        headIdx = len(nums) // 2
        head = TreeNode(nums[headIdx])
        head.left = self.sortedArrayToBST(nums[:headIdx])
        head.right = self.sortedArrayToBST(nums[headIdx+1:])
        return head
