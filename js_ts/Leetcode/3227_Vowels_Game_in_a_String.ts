function doesAliceWin(s: string): boolean {
    for (let ch of s) {
        if ((ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u')) {
            return true;
        }
    }

    return false;
};