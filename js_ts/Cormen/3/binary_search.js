function binarySearchIterative(arr, v) {
  let l = 0,
    r = arr.length - 1;

  while (l < r) {
    if (r === l) {
      if (arr[l] === v) return l;
      else return -1;
    }

    let mid = Math.floor((l + r) / 2);
    if (arr[mid] === v) {
      return mid;
    }

    if (arr[mid] < v) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
}

function binarySearchRecursive(arr, v, l = 0, r = arr.length) {
  if (r === l) {
    if (arr[l] === v) return l;
    else return -1;
  }

  let mid = Math.floor((l + r) / 2);
  if (arr[mid] === v) {
    return mid;
  }
  if (arr[mid] < v) {
    return binarySearchRecursive(arr, v, mid + 1, r);
  } else {
    return binarySearchRecursive(arr, v, l, mid - 1);
  }
}

const array = [1, 2, 5, 8, 12, 22, 23, 24, 56, 65, 77, 123];

console.log(binarySearchIterative(array, 22));
console.log(binarySearchRecursive(array, 22));
