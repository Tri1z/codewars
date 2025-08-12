function findSmallestInt(arr) {
  let min = arr[0]; // предполагаем, что первое число — минимальное

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]; // нашли число меньше — обновляем min
    }
  }

  return min;
}