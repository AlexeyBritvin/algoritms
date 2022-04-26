const data = [
  {
    message: "Cannot read property 'score' of undefined",
    timestamp: 0,
  },
  {
    message: "TypeError: 'undefined' is not an object",
    timestamp: 0,
  },
  {
    message: "Cannot read property 'score' of undefined",
    timestamp: 3,
  },
  {
    message: "TypeError: 'undefined' is not an object",
    timestamp: 5,
  },
  {
    message: "TypeError: 'undefined' is not an object",
    timestamp: 10,
  },
  {
    message: 'Uncaught RangeError: Maximum call stack size exceeded',
    timestamp: 14,
  },
  {
    message: "Cannot read property 'score' of undefined",
    timestamp: 15,
  },
  {
    message: 'ReferenceError: event is not defined',
    timestamp: 18,
  },
  {
    message: "Cannot read property 'score' of undefined",
    timestamp: 21,
  },
  {
    message: 'ReferenceError: event is not defined',
    timestamp: 22,
  },
];

const loggerLimiter = (messages) => {
  const map = new Map();
  const result = [];

  messages.forEach(({ message, timestamp }) => {
    const { timestamp: lastTimestamp, last, count } = map.get(message) || {};
    if (lastTimestamp < timestamp - 5 || lastTimestamp === undefined) {
      map.set(message, { timestamp, last: result.length, count: 1 });
      result.push({ message, timestamp });
    } else {
      map.set(message, { timestamp, last, count: count + 1 });
      result[last].message = `${message} (x${count + 1})`;
    }
  });

  return result;
};

constol.log(loggerLimiter(data));
