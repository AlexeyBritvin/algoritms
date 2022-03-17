const mockData = [
  [
    {
      login: 'stypeano',
      leaguePoints: 23,
    },
    {
      login: 'rstrazir',
      leaguePoints: 42,
    },
  ],
  [
    {
      login: 'kinerber',
      leaguePoints: 322,
    },
    {
      login: 'eridarma',
      leaguePoints: 1337,
    },
  ],
];

function searchPlayer(data, score) {
  // const resultPlayer = {
  //   league: null,
  //   placement: null,
  // };

  // data.forEach((league, leagueIndex) =>
  //   league.forEach((player, playerIndex) => {
  //     if (player.leaguePoints === score) {
  //       resultPlayer.league = leagueIndex + 1;
  //       resultPlayer.placement = league.length - playerIndex;
  //     }
  //   })
  // );

  const leagueIndex = searchForLeague(data, score);
  const playerIndex = searchForPlayer(data[leagueIndex], score);

  if (leagueIndex !== null && playerIndex !== null) {
    return {
      league: leagueIndex + 1,
      placement: data[leagueIndex].length - playerIndex,
    };
  } else {
    return null;
  }
}

searchPlayer(mockData, 322);

//{ "league": 2, "placement": 2 }
