function canBeTypedWords(text: string, brokenLetters: string): number {
    let arr = text.split(' ');
    for (const ch of brokenLetters) {
        arr = arr.filter((word) => !word.includes(ch));
    }
    return arr.length;
};