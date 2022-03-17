const tableBoard = [
  [
    {
      login: 'stypeano',
      leaguePoints: 4,
    },
    {
      login: 'rstrazir',
      leaguePoints: 45,
    },
    {
      login: 'cathead',
      leaguePoints: 143,
    },
    {
      login: 'cavernous',
      leaguePoints: 324,
    },
  ],
  [
    {
      login: 'ConspiracyLil',
      leaguePoints: 356,
    },
    {
      login: 'CzarStories',
      leaguePoints: 568,
    },
    {
      login: 'GottaSaiyan',
      leaguePoints: 598,
    },
    {
      login: 'Mountaintrid',
      leaguePoints: 785,
    },
  ],
  [
    {
      login: 'Rectionom',
      leaguePoints: 930,
    },
    {
      login: 'JoshChase',
      leaguePoints: 931,
    },
    {
      login: 'DreamLess',
      leaguePoints: 956,
    },
    {
      login: 'BlondiePlanet',
      leaguePoints: 1045,
    },
  ],
  [
    {
      login: 'Breakingbing',
      leaguePoints: 1056,
    },
    {
      login: 'Goldenelox',
      leaguePoints: 1130,
    },
    {
      login: 'SaiyanBroadway',
      leaguePoints: 1432,
    },
    {
      login: 'BoostScooby',
      leaguePoints: 1476,
    },
  ],
];

// search for league [[{}, {}], [{}, {}], [{}, {}, {}]]
// search for player

export const searchForLeague = (board, score, original) => {
  if (!original) {
    original = board;
  }
  if (!board.length) return null;

  let middle = Math.round((board.length - 1) / 2);
  let league = board[middle];
  const firstPlacePoints = league[0].leaguePoints;
  const lastPlacePoints = league[league.length - 1].leaguePoints;

  if (score >= firstPlacePoints && score <= lastPlacePoints) {
    return middle;
  }

  if (score > lastPlacePoints) {
    return searchForLeague(board.slice(middle + 1), score, board);
  }

  if (score < firstPlacePoints) {
    return searchForLeague(board.slice(0, middle), score, board);
  }

  return null;
};

export const searchForPlayer = (league, score, original) => {
  if (!original) {
    original = league;
  }
  if (!league.length) return null;
  let middle = Math.round((league.length - 1) / 2);

  if (league[middle].leaguePoints === score) {
    return original.findIndex((player) => player.leaguePoints === score);
  }

  if (league[middle].leaguePoints < score) {
    return searchForPlayer(league.slice(middle + 1), score, league);
  }

  if (league[middle].leaguePoints >= score) {
    return searchForPlayer(league.slice(0, middle), score, league);
  }

  return null;
};

// test(binarySearch(tableBoard, 322), 'kinerber');
