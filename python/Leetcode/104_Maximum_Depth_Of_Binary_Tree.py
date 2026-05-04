from typing import Optional
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        layer = [root]
        count = 0
        while layer:
            count += 1
            new_layer = []
            for node in layer:
                if node.left:
                    new_layer.append(node.left)
                if node.right:
                    new_layer.append(node.right)
            layer = new_layer
        return count
            
