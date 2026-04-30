function replaceNonCoprimes(nums: number[]): number[] {
    let stack: number[] = [];
    for (const num of nums) {
        stack.push(num);
        while(stack.length > 1 && gcd(stack[stack.length - 1], stack[stack.length - 2]) > 1) {
            stack.push(lcm(stack.pop(), stack.pop()));
        }
    }
    return stack;
};

/** a must be greater than b */
function gcd(a: number, b: number): number {
    return b > 0 ? gcd(b, a % b) : a;
}

function lcm(a: number, b: number): number {
    const g = gcd(a, b);
    return a * b / g;
}