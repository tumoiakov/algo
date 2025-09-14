function devowel(word: string): string {
  return word.replaceAll(/[aiueo]/g, "*");
}

function spellchecker(wordlist: string[], queries: string[]): string[] {
  const caseSensetive = new Set<string>();
  const caseInsensetive = new Map<string, string>();
  const devoweled = new Map<string, string>();

  const res: string[] = [];

  for (const word of wordlist) {
    caseSensetive.add(word);

    const ciWord = word.toLowerCase();
    if (!caseInsensetive.has(ciWord)) {
      caseInsensetive.set(ciWord, word);
    }
    const uw = devowel(ciWord);
    if (!devoweled.has(uw)) {
      devoweled.set(uw, word);
    }
  }

  for (const query of queries) {
    if (caseSensetive.has(query)) {
      res.push(query);
      continue;
    }

    const ciQuery = query.toLowerCase();
    if (caseInsensetive.has(ciQuery)) {
      res.push(caseInsensetive.get(ciQuery));
      continue;
    }

    const uq = devowel(ciQuery);
    if (devoweled.has(uq)) {
      res.push(devoweled.get(uq));
      continue;
    }

    res.push("");
  }

  return res;
}
