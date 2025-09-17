function isPalindrome(s: string): boolean {
    s = s.toLowerCase().replaceAll(/[^a-z0-9]/g, '');
    let l = 0, r = s.length - 1;
    while (l < r) {
        if (s[l] !== s[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};