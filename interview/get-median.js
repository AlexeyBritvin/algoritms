// Есть 2 отсортированных массива, надо узнать число,
// которое будет посередине, если объединить эти массивы в один отсортированный массив:
[1, 2, 3, 3, 4, 13, 15, 16, 20];

// Надо постараться сделать оптимальный алгоритм

const getMedian = (arr1, arr2) => {
  const middle = Math.floor((arr1.length + arr2.length) / 2);
  const unioinArr = [];

  for (let i = 0; i <= middle; i += 1) {
    if (arr1[i] < arr2[i] || arr2[i] === undefined) {
      unioinArr.push(arr1[i]);
    }
    if (arr1[i] > arr2[i] || arr1[i] === undefined) {
      unioinArr.push(arr2[i]);
    }
    if (arr1[i] === arr2[i]) {
      unioinArr.push(arr1[i], arr2[i]);
    }
  }

  console.log(unioinArr);

  return unioinArr[unioinArr.length - 1];
};

console.log(getMedian([1, 3, 15, 20], [2, 3, 4, 13, 16])); // 4 [1, 2, 3, 3, 4, 13, 15, 16, 20]
console.log(getMedian([6, 7, 10, 12], [2, 3, 4, 13, 16])); // 7 [2, 3, 4, 6, 7, 10, 12, 13, 16]
console.log(getMedian([1, 2, 3], [4, 5, 6, 7])); // 4
console.log(getMedian([4, 5, 6, 7], [1, 2, 3])); // 4
