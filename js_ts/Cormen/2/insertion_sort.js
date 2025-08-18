function insertion_sort(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    key = numbers[i];
    let j = i - 1;
    while (numbers[j] > key && j >= 0) {
      numbers[j + 1] = numbers[j];
      j--;
    }
    numbers[j + 1] = key;
  }
  return numbers;
}

let nums = [1, 2, 3, 4, 12, 33, 45, -12, -45, 128, 32];

console.log(insertion_sort(nums));
