const plants = [
  'Аспарагус',
  'Гвоздика',
  'Жасмин',
  'Калина',
  'Малина',
  'Пион',
  'Тысячелистник',
  'Хризантема',
  'Шафран',
  'Юкка',
];

export const binarySearch = (plants, plant, original) => {
  if (!original) {
    original = plants;
  }
  if (!plants.length) return null;
  let middle = Math.round((plants.length - 1) / 2);

  if (plants[middle] === plant) return original.indexOf(plant);

  if (plants[middle][0] < plant[0]) {
    return binarySearch(plants.slice(middle + 1), plant, plants);
  }

  if (plants[middle][0] >= plant[0]) {
    return binarySearch(plants.slice(0, middle), plant, plants);
  }

  return null;
};

const bs = (plants, plant) => {
  let left = 0;
  let right = plants.length - 1;

  while (left < right) {
    const center = Math.floor((left + right) / 2);

    if (plants[center] === plant) {
      return center;
    }

    if (plants[center] < plant) {
      left = center + 1;
    } else {
      right = center;
    }

    return null;
  }
};

test(binarySearch(plants, 'Пион'), 5);
test(binarySearch(plants, 'Малина'), 4);
test(binarySearch(plants, 'Шафран'), 8);
test(binarySearch(plants, 'Гвоздика'), 1);
test(binarySearch(plants, 'Роза'), null);
