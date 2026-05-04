from typing import Optional
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        layer = [root]
        depth = 0
        while layer:
            new_layer = []
            depth += 1
            for node in layer:
                if not node.left and not node.right:
                    return depth
                else:
                    if node.left:
                        new_layer.append(node.left)
                    if node.right:
                        new_layer.append(node.right)
            layer = new_layer
        return depth