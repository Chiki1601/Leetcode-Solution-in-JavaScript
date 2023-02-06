var maximizeWin = function(prizePositions, k) {
  const dp = {};
  
  for (const position of prizePositions)
    dp[position] = Array(3).fill(0);
  
  for (let i = 0, j = 0; i < prizePositions.length; ++i) {
    const position = prizePositions[i];
    
    // range of prizes we can collect is [position - k, position];
    while (prizePositions[j] < position - k)
      ++j;
    
    for (let interval = 1; interval <= 2; ++interval) {
      // we have two options:

      // 1) we place the interval so that it ends at `position`
      //    in doing so we collect i - j + 1 prizes plus 
      //    dp[prizePositions[j - 1]][interval - 1]
      const maxFromPlacingIntervalAtPosition =
        i - j + 1 + (j > 0 ? dp[prizePositions[j - 1]][interval - 1] : 0);
      
      // 2) we do not place the interval and use the max we got
      //    at the previous position
      const maxFromPrevious = i > 0 ? dp[prizePositions[i - 1]][interval] : 0;
      
      dp[position][interval] = Math.max(
        maxFromPlacingIntervalAtPosition, maxFromPrevious
      );
    }
  }
  
  return dp[prizePositions[prizePositions.length - 1]][2];
};
