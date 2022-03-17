const mockData = [
  [
    {
      login: 'stypeano',
      leaguePoints: 4,
      guild: 'seabass',
    },
    {
      login: 'rstrazir',
      leaguePoints: 356,
      guild: 'seabass',
    },
    {
      login: 'cathead',
      leaguePoints: 930,
      guild: 'seabass',
    },
    {
      login: 'cavernous',
      leaguePoints: 1056,
      guild: 'seabass',
    },
  ],
  [
    {
      login: 'ConspiracyLil',
      leaguePoints: 18,
      guild: 'goldfish',
    },
    {
      login: 'CzarStories',
      leaguePoints: 568,
      guild: 'goldfish',
    },
    {
      login: 'GottaSaiyan',
      leaguePoints: 931,
      guild: 'goldfish',
    },
    {
      login: 'Mountaintrid',
      leaguePoints: 1130,
      guild: 'goldfish',
    },
  ],
  [
    {
      login: 'Rectionom',
      leaguePoints: 42,
      guild: 'catfish',
    },
    {
      login: 'JoshChase',
      leaguePoints: 931,
      guild: 'catfish',
    },
    {
      login: 'DreamLess',
      leaguePoints: 956,
      guild: 'catfish',
    },
    {
      login: 'BlondiePlanet',
      leaguePoints: 1045,
      guild: 'catfish',
    },
  ],
  [
    {
      login: 'Breakingbing',
      leaguePoints: 64,
      guild: 'bream',
    },
    {
      login: 'Goldenelox',
      leaguePoints: 932,
      guild: 'bream',
    },
    {
      login: 'SaiyanBroadway',
      leaguePoints: 1432,
      guild: 'bream',
    },
    {
      login: 'BoostScooby',
      leaguePoints: 1476,
      guild: 'bream',
    },
  ],
];

const findPlayerInGuild = (score, league) => {
  return league.find((pl, index) => {
    if (pl.leaguePoints === score) {
      return {
        guild: pl.guild,
        placement: league.length - index,
      };
    }
  });
};

const findPlayer = (score, scoreBoard) => {
  let resultPlayer;
  for (let league of scoreBoard) {
    resultPlayer = findPlayerInGuild(score, league);
  }

  return resultPlayer;
};
