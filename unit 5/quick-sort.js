function quickSort(array) {
  if (array.length === 1) {
    return array;
  }

  if (array.length === 2) {
    if (array[0] > array[1]) {
      [array[0], array[1]] = [array[1], array[0]];
    }

    return array;
  }

  const left = [];
  const right = [];
  const middle = array[Math.round((array.length - 1) / 2)];

  array.forEach((item) => {
    if (item <= middle && array.indexOf(item) !== array.indexOf(middle)) {
      left.push(item);
    } else if (item > middle) {
      right.push(item);
    }
  });

  left.push(middle);

  return [...quickSort(left), ...quickSort(right)];
}

console.log(quickSort([5, 3, 2, 1]));
