function getInversionCount(arr, l = 0, r = arr.length - 1) {
  if (l < r) {
    const mid = Math.floor((l + r) / 2);
    const left = getInversionCount(arr, l, mid);
    const right = getInversionCount(arr, mid + 1, r);
    const inv = merge(arr, l, mid, r) + left + right;
    return inv;
  }
  return 0;
}

function merge(arr, l, mid, r) {
  let inv = 0;
  const lArr = arr.slice(l, mid + 1);
  const rArr = arr.slice(mid + 1, r + 1);
  let i = 0,
    j = 0,
    k = l;

  while (i < lArr.length && j < rArr.length) {
    if (lArr[i] <= rArr[j]) {
      arr[k++] = lArr[i++];
      inv += j;
    } else {
      arr[k++] = rArr[j++];
    }
  }

  // Copy remaining elements from lArr
  while (i < lArr.length) {
    arr[k++] = lArr[i++];
    inv += rArr.length;
  }

  // Copy remaining elements from rArr
  while (j < rArr.length) {
    arr[k++] = rArr[j++];
  }

  return inv;
}

const arr = [2, 3, 8, 6, 1];
const arr2 = [5, 4, 3, 2, 1];
console.log(getInversionCount(arr2)); // Output: 10
