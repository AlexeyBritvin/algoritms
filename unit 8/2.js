/*
Задача: смоделировать очередь людей (queue) на сервер из slots видеокарт
*/

// test(predict([1, 2, 3], 1), 6);
// test(predict([1, 2, 3], 2), 2);
// test(predict([1, 2, 3], 3), 1);
// test(predict([3, 2, 3], 3), 2);

// Напишите функцию, которая будет прогнозировать
// для вставшего в очередь пользователя, сколько ему придётся прождать.
// Для упрощения будем считать, что первый человек в нашей симуляции зайдёт на сервер сразу же,
// как только займёт очередь.

function findMinIndex(machines) {
  const min = Math.min(...machines);

  return machines.indexOf(min);
}

function predict(queue, slots) {
  const cards = Array(slots).fill(0);

  while (queue.length) {
    const current = queue.shift();
    const minIndex = findMinIndex(cards);

    cards[minIndex] += current;
  }

  return Math.min(...cards);
}

predict([4, 5, 3, 3], 2);
