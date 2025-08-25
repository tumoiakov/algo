function findDiagonalOrder(mat: number[][]): number[] {
  let i = 0,
    j = 0,
    m = mat.length,
    n = mat[0].length;
  let res: number[] = [];
  for (let k = 0; k < m + n - 1; k++) {
    if (k % 2 === 0) {
      if (i >= m) {
        j = j + 2;
        i = i - 1;
      } else {
        j = 0;
      }
      while (i >= 0 && j < n) {
        res.push(mat[i][j]);
        i--;
        j++;
      }
    } else {
      if (j >= n) {
        i = i + 2;
        j = j - 1;
      } else {
        i = 0;
      }
      while (j >= 0 && i < m) {
        res.push(mat[i][j]);
        i++;
        j--;
      }
    }
  }
  return res;
}

const mat = [
  [1, 2],
  [3, 4],
];
const mat1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const mat2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log(findDiagonalOrder(mat));
console.log(findDiagonalOrder(mat1));
console.log(findDiagonalOrder(mat2));
