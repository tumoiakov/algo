from typing import Optional
# Definition for singly-linked list.
class ListNode:
    def __init__(self, x: Optional[ListNode]):
        self.val: Optional[ListNode] = x
        self.next: Optional[ListNode] = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slow = fast = head
        while slow and fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        return False
    
    # def hasCycle(self, head: Optional[ListNode]) -> bool:
    #     if not head:
    #         return False
    #     while head:
    #         if not head.next:
    #             return False
    #         if head.next == head:
    #             return True
    #         else: 
    #             temp = head.next
    #             head.next = head
    #             head = temp
            
    #     return False