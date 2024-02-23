/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
  let totalPrice = Number.MAX_VALUE;
  const graph = {};

  flights.forEach((flight) => {
    const [flightSrc, flightDest, flightPrice] = flight;

    if (!graph[flightSrc]) {
      graph[flightSrc] = {};
    }

    graph[flightSrc][flightDest] = flightPrice;
  });

  let sourceCity;
  let destinations;

  let price;
  let updatedPrice;

  let stops;
  let nextStops;

  const stack = [[graph[src], 0, 0]];
  const visited = {};

  while (stack.length) {
    sourceCity = stack.shift();
    [destinations, price, stops] = sourceCity;

    if (stops > K) continue;

    nextStops = stops + 1;
    if (destinations) {
      Object.keys(destinations).forEach((city) => {
        updatedPrice = price + destinations[city];
        // eslint-disable-next-line radix
        if (parseInt(city) === parseInt(dst) && updatedPrice < totalPrice) {
          totalPrice = updatedPrice;
        }

        if (visited[city] < updatedPrice) return;

        visited[city] = updatedPrice;
        stack.push([graph[city], updatedPrice, nextStops]);
      });
    }
  }

  return totalPrice === Number.MAX_VALUE ? -1 : totalPrice;
};
