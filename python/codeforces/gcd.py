def gcd(a, b):
    return gcd(b, a % b) if b > 0 else a

x = list(map(int, input().split(" ")))

for i in range(len(x) - 1):
    print(gcd(x[i], x[i+1]))
