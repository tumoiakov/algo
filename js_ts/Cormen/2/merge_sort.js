function merge_sort(numbers) {
  if (numbers.length <= 1) {
    return numbers;
  } else {
    let first = merge_sort(numbers.slice(0, Math.floor(numbers.length / 2)));
    let second = merge_sort(numbers.slice(Math.floor(numbers.length / 2)));
    let res = [];
    let i = 0;
    let j = 0;
    while (i < first.length && j < second.length) {
      if (first[i] < second[j]) {
        res.push(first[i]);
        i++;
      } else {
        res.push(second[j]);
        j++;
      }
    }
    return res.concat(first.slice(i)).concat(second.slice(j));
  }
}

let nums = [1, 2, 3, 4, 12, 33, 45, -12, -45, 128, 32];

console.log(merge_sort(nums));
