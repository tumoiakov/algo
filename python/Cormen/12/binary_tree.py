class Node:
    def __init__(self, value, parent = None):
        self.value = value
        self.parent = parent
        self.left = None
        self.right = None

def insert(root, value):
    if root == None:
        return Node(value)

    y = root.parent
    x = root
    while x != None:
        y = x
        if value < x.value:
            x = x.left
        else:
            x = x.right

    new_node = Node(value, y)
    if value < y.value:
        y.left = new_node
    else:
        y.right = new_node
    return root

def remove(node):
    replacement_node = None

    if node.left == None and node.right != None:
        replacement_node = node.right

    if node.left != None and node.right == None:
        replacement_node = node.left

    if node.left != None and node.right != None:
        replacement_node = successor(node)
        if replacement_node.right != None and replacement_node.parent != node:
            replacement_node.parent.left = replacement_node.right
        replacement_node.left = node.left
        
    replacement_node.parent = node.parent
    if node.parent.value > node.value: 
        node.parent.left = replacement_node
    else:
        node.parent.right = replacement_node

def find(root, value):
    x = root
    while x != None and x.value != value :
        if x.value > value:
            x = x.left
        else:
            x = x.right
    return x
    
def min(root):
    y = root.parent
    x = root
    while x != None:
        y = x
        x = x.left
    return y

def max(root):
    y = root.parent
    x = root
    while x != None:
        y = x
        x = x.right
    return y

def predecessor(node):
    if node.left != None:
        return max(node.left)
    y = node.parent
    x = node
    while y != None and y.value >= x.value:
        x = y
        y = y.parent
    return y


def successor(node):
    if node.right != None:
        return min(node.right)
    y = node.parent
    x = node
    while y != None and y.value < x.value:
        x = y
        y = y.parent
    return y

# Пример использования
if __name__ == "__main__":
    values = [20, 10, 30, 5, 15, 25, 35]
    root = None
    for val in values:
       root = insert(root, val)

    target_node = root.left.right  # Узел со значением 15

    predecessor = predecessor(target_node)
    successor = successor(target_node)

    print(f"Предшествующий элемент для {target_node.value}: {predecessor.value}")
    print(f"Последующий элемент для {target_node.value}: {successor.value}")