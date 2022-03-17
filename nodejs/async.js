'use strict';

const fs = require(`fs`);

const TIMEOUT = 1000;

console.log(`Привет мир!`);

setTimeout(() => console.log(`Привет, из setTimeout`), TIMEOUT);

setTimeout(() => console.log(`Привет из setTimeout (0)`), 0);

setImmediate(() => console.log(`Привет из setImmediate`));

process.nextTick(() => console.log(`Привет, из nextTick`));

fs.readFileSync(__filename);
console.log(`Контент прочитан синхронно.`);

fs.readFile(__filename, () => console.log(`Контент прочитан асинхронно.`));

new Promise((resolve) => resolve(`Привет, из промиса`))
  .then(console.log);

console.log(`Конец`);
