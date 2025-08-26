var areaOfMaxDiagonal = function(dimensions) {
    let maxArea = 0, maxDiag = 0;

    for (let i = 0; i < dimensions.length; i++) {
        let l = dimensions[i][0];
        let w = dimensions[i][1];
        let currDiag = l * l + w * w;

        if (currDiag > maxDiag || (currDiag === maxDiag && l * w > maxArea)) {
            maxDiag = currDiag;
            maxArea = l * w;
        }
    }
    return maxArea;
};
