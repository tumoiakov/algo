import { randomizedPartition } from "../7/quicksort";

function randomizedSelect(
  arr: number[],
  i: number,
  p = 0,
  r = arr.length - 1
): number {
  if (p === r) {
    return arr[p];
  }

  const q = randomizedPartition(arr, p, r);
  const k = q - p + 1;

  if (i === k) {
    return arr[q];
  }

  if (i < k) {
    return randomizedSelect(arr, i, p, q - 1);
  }

  return randomizedSelect(arr, i - k, q + 1, r);
}

const arr = [4, 3, 2, 6, 8, 14, 5, 22, 22, 44, 1, 1, 2];
console.log(randomizedSelect(arr, 5));
