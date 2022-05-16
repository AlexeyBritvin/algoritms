const resultExample = [
  {
    login: 'JoshChase',
    step: 3,
  },
  {
    login: 'BlondiePlanet',
    step: 1,
  },
  {
    login: 'Goldenelox',
    step: 1,
  },
  {
    login: 'Rectionom',
    step: 2,
  },
  {
    login: 'Mountaintrid',
    step: 3,
  },
  {
    login: 'Breakingbing',
    step: 1,
  },
  {
    login: 'GottaSaiyan',
    step: 2,
  },
];

const players = [
  'GottaSaiyan',
  'Mountaintrid',
  'Rectionom',
  'JoshChase',
  'DreamLess',
  'BlondiePlanet',
  'Breakingbing',
  'Goldenelox',
];

const getRandomNum = () => Math.floor(Math.random() * 3) + 1;

const findWinner = (players) => {
  const playersCopy = [...players];
  const eliminated = [];

  while (playersCopy.length !== 1) {
    const step = getRandomNum();
    let remove = step;

    while (remove) {
      const first = playersCopy.shift();
      playersCopy.push(first);
      remove--;
    }

    const eliminatedLogin = playersCopy.shift();
    eliminated.push({
      login: eliminatedLogin,
      step,
    });
  }

  return eliminated;
};

findWinner(players);
