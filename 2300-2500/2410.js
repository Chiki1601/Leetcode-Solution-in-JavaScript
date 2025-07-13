function matchPlayersAndTrainers(players, trainers) {
  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);

  let i = 0, j = 0, matches = 0;
  while (i < players.length && j < trainers.length) {
    if (players[i] <= trainers[j]) {
      ++matches;
      ++i;
    }
    ++j;
  }
  return matches;
}
