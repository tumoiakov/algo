let vowels = new Set(["a", "e", "i", "o", "u"]);
function maxFreqSum(s: string): number {
  let letterCounts = new Map<string, number>();

  for (let ch of s) {
    let count = letterCounts.get(ch);
    if (count) {
      letterCounts.set(ch, count + 1);
    } else {
      letterCounts.set(ch, 1);
    }
  }

  let maxVowelCount = 0,
    maxConsonantCount = 0;
  for (let [key, value] of letterCounts) {
    if (vowels.has(key)) {
      if (value > maxVowelCount) {
        maxVowelCount = value;
      }
    } else {
      if (value > maxConsonantCount) {
        maxConsonantCount = value;
      }
    }
  }

  return maxConsonantCount + maxVowelCount;
}
