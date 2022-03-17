function bubbleSort(array) {
  for (let i = array.length - 1; i >= 1; i--) {
    for (let k = 0; k <= i; k++) {
      if (array[k] > array[k + 1]) {
        [array[k + 1], array[k]] = [array[k], array[k + 1]];
      }
    }
  }
  return array;
}

console.log(bubbleSort([56, 87, 18, 92, 42, 31, 44, 82, 36, 91]));
