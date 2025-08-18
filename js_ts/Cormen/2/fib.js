// let start1 = performance.now();
// function fib(num) {
//   if (num <= 1) return num;
//   return fib(num - 1) + fib(num - 2);
// }
// let end1 = performance.now();

let start2 = performance.now();
function fibf(num) {
  return Math.floor(Math.pow(1.61803, num) / Math.sqrt(5) + 0.5);
}
let end2 = performance.now();

//console.log(`Execution time for fib: ${end1 - start1} ms`);
console.log(`Execution time for fibf: ${end2 - start2} ms`);

//console.log(fib(13000));
console.log(fibf(1300));
