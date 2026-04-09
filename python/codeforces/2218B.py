t = int(input())
for i in range(t):
    arr = list(map(int, input().split(" ")))
    arr.sort()
    print(-1 * (sum(arr[:-1])) + arr[-1])
