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

// Поиск двух элементов множества, сумма которых равна x
function searchSum(arr, x) {
  let sorted_arr = merge_sort(arr); // Сортируем
  let i = 0;
  let j = sorted_arr.length - 1;
  while (i < j) { // идем с двух сторон
    let sum = sorted_arr[i] + sorted_arr[j];
    if (sum === x) return true;
    if (sum < x) i++; // если сумма меньше, то увеличиваем меньшее слагаемое. Увеличиваем число понемногу.
    if (sum > x) j--; // если сумма больше, то уменьшаем большее слагаемое. Отбрасываем числа, которые дают большую сумму в паре с минимальным слагаемым.
  }
  return false;
} 
// Работает так. Сперва отбрасываются большие слагаемые(arr[j]), 
// те с которыми сумма с минимальным слагаемым a[i] = a[0] превышает х,
// а затем когда нашли первое число справа, сумма с которым меньше x, начинаем увеличивать i
// в случае если сумма снова превышает x, повторяем действия справа.

let nums = [1, 2, 3, 4, 12, 33, 45, -12, -45, 128, 32];

let x = 44;

console.log(searchSum(nums, x));
