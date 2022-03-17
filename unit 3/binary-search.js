function binarySearch(plants, plant) {
  let left = 0;
  let right = plants.length - 1;

  while (left < right) {
    const center = Math.floor((right + left) / 2);

    if (plants[center] === plant) {
      return center;
    }

    // Если то, что мы ищем, левее по алфавиту, идем искать в левую часть массива
    if (plants[center].localeCompare(plant) === 1) {
      right = center - 1;
      // иначе идем в другую сторону
    } else {
      left = center + 1;
    }
  }

  return null;
}
