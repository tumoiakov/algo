t = int(input())
for i in range(t):
    n = int(input())
    arr = list(range(1, 3*n + 1))
    l = 0
    m = len(arr) - 1
    while(l < m - 1):
        print(arr[l], arr[m], arr[m - 1], end=' ') 
        l += 1
        m -= 2
    print()

