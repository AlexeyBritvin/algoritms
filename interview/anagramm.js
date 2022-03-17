// Все анаграммы собрать в массивы
// [["вертикаль", "кильватер"], ["апельсин", "спаниель"], ...]

// Надо постараться сделать оптимальный алгоритм

const arr = [
  'вертикаль',
  'кильватер',
  'апельсин',
  'спаниель',
  'австралопитек',
  'ватерполистка',
  'кластер',
  'сталкер',
  'стрелка',
  'корабль',
];

// отсортировать слова
// найти одинаковые
// сложить их в подходящую структуру данных

const findAnangramms = (words) => {
  const obj = {};
  const result = [];

  const sorted = words.map((word) => word.split('').sort().join(''));

  for (let i = 0; i < sorted.length; i++) {
    const sortedWord = sorted[i];
    if (!obj[sortedWord]) {
      obj[sortedWord] = [];
    }
    obj[sortedWord].push(words[i]);
  }

  Object.values(obj).forEach((value) => result.push(value));

  return result;
};

console.log(findAnangramms(arr));
