var firstCompleteIndex = function(arr, mat) {
    const rows = mat.length, cols = mat[0].length;
    const positionMap = new Map();
    const rowCount = Array(rows).fill(cols);
    const colCount = Array(cols).fill(rows);
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            positionMap.set(mat[r][c], [r, c]);
        }
    }

    for (let idx = 0; idx < arr.length; idx++) {
        const [row, col] = positionMap.get(arr[idx]);
        if (--rowCount[row] === 0 || --colCount[col] === 0) {
            return idx;
        }
    }

    return -1;
};
