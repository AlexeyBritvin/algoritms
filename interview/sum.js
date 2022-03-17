// Реализовать функцию, которую можно вызывать так:
// sum(1)(2)(3)(); // 6
// sum(1)(2)(3)(4)(); // 10
// sum(1)(2)(3)(4)(5)(6)(); // 21
// При последнем пустом значении возвращаем не функцию, а результат

const sum = (a) => {
  let result = a;
  return function inner(b) {
    if (b !== undefined) {
      result += b;

      return inner;
    }

    return result;
  };
};

console.log(sum(1)(2)(3)()); // 6
console.log(sum(1)(2)(3)(4)()); // 10
console.log(sum(1)(2)(3)(4)(5)(6)()); // 21
