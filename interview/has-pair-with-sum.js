// Дана коллекция чисел, необходимо реализовать функцию, которая находит в ней пару чисел, составляющие заданную сумму

// Надо решить за линейную сложность
// hasPairWithSum([3, 4, 7, 10], 8); // false
// hasPairWithSum([1, 4, 4, 9], 8); // true
// hasPairWithSum([-8, 1, 4, 9, 16], 8); // true

const getSimpleNumbers = (num) =>
  num % 2 === 0 ? getSimpleNumbers(num / 2) : num;

const isSimpleNum = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;

  let i = 2;
  const limit = Math.sqrt(num);
  while (i <= limit) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
};

const hasPairWithSum = (arr, sum) => {
  arr.forEach((item) => {});

  return false;
};
