function isSubsequence(s: string, t: string): boolean {
  if (s === t) return true;

  let j = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[j]) {
      j++;
    }
    if (j === s.length) return true;
  }
  return false;
}
