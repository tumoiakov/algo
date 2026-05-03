class Solution:
    def addBinary(self, a: str, b: str) -> str:
        o = False
        result = ""
        l = len(a) - 1
        r = len(b) - 1
        while l >= 0 and r >= 0:
            if a[l] == '1' and b[r] == '1':
                result = '1' + result if o else '0' + result
                o = True
            elif a[l] == '0' and b[r] == '0':
                result = '1' + result if o else '0' + result
                o = False
            else:
                if o:
                    result = '0' + result
                    o = True
                else:
                    result = '1' + result
                    o = False
            l -= 1
            r -= 1
        if l > -1:
            while l >= 0:
                if not o:
                    result = a[l] + result
                elif a[l] == '1':
                    result = '0' + result
                    o = True
                else:
                    result = '1' + result
                    o = False
                l -= 1
        elif r > -1:
            while r >= 0:
                if not o:
                    result = b[r] + result
                elif b[r] == '1':
                    result = '0' + result
                    o = True
                else:
                    result = '1' + result
                    o = False
                r -= 1
        if o:
            result = '1' + result
        return result
    
        #or
        # a = int(a, 2)
        # b = int(b, 2)
        # return bin(a + b)[2:]


            
