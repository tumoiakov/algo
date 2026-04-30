function quicksort(arr: number[], l = 0, r = arr.length - 1) {
  if (l < r) {
    const q = randomizedPartition(arr, l, r);
    quicksort(arr, l, q - 1);
    quicksort(arr, q + 1, r);
  }
}

function partition(arr: number[], l: number, r: number): number {
  const x = arr[r];
  let i = l - 1;

  for (let j = l; j < r; j++) {
    if (arr[j] <= x) {
      i++;
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  const temp = arr[i + 1];
  arr[i + 1] = arr[r];
  arr[r] = temp;
  return i + 1;
}

function randomizedPartition(arr: number[], l: number, r: number): number {
  const i = Math.floor(Math.random() * (r - l) + l);
  const temp = arr[i];
  arr[i] = arr[r];
  arr[r] = temp;
  return partition(arr, l, r);
}

const arr = [4, 3, 2, 6, 8, 14, 5, 22, 22, 44, 1, 1, 2];
quicksort(arr);
console.log(arr);

export { randomizedPartition }