function hIndex(citations: number[]): number {
    citations.sort((a, b) => a - b);
    let h = 0;

    for (let i = citations.length - 1; i >= 0; i--) {
        if (citations[i] > h) {
            h++;
        } else {
            return h;
        }
    }

    return h;
};

function hIndex_2(citations: number[]): number {
    let a = new Array(1001).fill(0);
    for (const citation of citations) {
        a[citation]++;
    }
    let sum = 0;
    for (let i = 1000; i >= 0; i--) {
        sum += a[i];
        if (sum >= i) {
            return i;
        }
    }
    return 0;
};