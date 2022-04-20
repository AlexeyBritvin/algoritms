const data = [
  {
    login: 'DreamLess',
    leaguePoints: 956,
  },
  {
    login: 'cavernous',
    leaguePoints: 1056,
  },
  {
    login: 'SaiyanBroadway',
    leaguePoints: 1432,
  },
  {
    login: 'BlondiePlanet',
    leaguePoints: 1045,
  },
  {
    login: 'Mountaintrid',
    leaguePoints: 1130,
  },
  {
    login: 'cathead',
    leaguePoints: 930,
  },
  {
    login: 'rstrazir',
    leaguePoints: 356,
  },
  {
    login: 'stypeano',
    leaguePoints: 4,
  },
  {
    login: 'CzarStories',
    leaguePoints: 568,
  },
  {
    login: 'ConspiracyLil',
    leaguePoints: 18,
  },
  {
    login: 'GottaSaiyan',
    leaguePoints: 931,
  },
  {
    login: 'Goldenelox',
    leaguePoints: 932,
  },
  {
    login: 'Breakingbing',
    leaguePoints: 64,
  },
  {
    login: 'Rectionom',
    leaguePoints: 42,
  },
  {
    login: 'BoostScooby',
    leaguePoints: 1476,
  },
  {
    login: 'JoshChase',
    leaguePoints: 931,
  },
];

const findMedian = (min, max) => {
  const interval = max - min;
  const shift = min;
  return Math.round(Math.random() * interval + shift);
};

const partition = (arr, left, right) => {
  const median = arr[findMedian(left, right)];

  while (left < right) {
    while (arr[left].leaguePoints < median.leaguePoints) {
      left++;
    }

    while (arr[right].leaguePoints > median.leaguePoints) {
      right--;
    }

    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return left;
};

const quickSort = (arr, left, right) => {
  left = left ?? 0;
  right = right ?? arr.length - 1;

  const pivotIndex = partition(arr, left, right);

  if (pivotIndex < right) {
    quickSort(arr, pivotIndex, right);
  }

  return arr;
};

const findBestPlayers = (board) => {
  if (board.length <= 3) {
    return board;
  }
  const sorted = quickSort(board);
  return sorted.slice(board.length - 3);
};

console.log(findBestPlayers(data));
