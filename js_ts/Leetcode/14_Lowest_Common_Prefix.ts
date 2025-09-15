function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0];
  for (const str of strs) {
    for (let i = 0; i < prefix.length; i++) {
      if (str[i] !== prefix[i]) {
        prefix = prefix.substring(0, i); // Note - substring is much faster than slice in this case
        break;
      }
    }
  }
  return prefix;
}
