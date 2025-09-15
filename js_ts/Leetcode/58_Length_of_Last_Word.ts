function lengthOfLastWord(s: string): number {
  let arr = s.trim().split(" ");
  return arr[arr.length - 1].length;
}

function lengthOfLastWord_2(s: string): number {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (count > 0 && s[i] === " ") {
      break;
    }
    if (s[i] !== " ") {
      count++;
    }
  }
  return count;
}
