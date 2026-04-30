const symbols = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

function romanToInt(s: string): number {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && symbols[s[i] + s[i + 1]]) {
      res += symbols[s[i] + s[i + 1]];
      i++;
    } else {
      res += symbols[s[i]];
    }
  }
  return res;
}
