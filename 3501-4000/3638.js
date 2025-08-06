const maxBalancedShipments = (weight, prev = 0) => weight
    .reduce((res, w) => (
        res += (w < prev),
        prev = (w < prev) ? 0 : w, res
    ), 0);
