let convert = function(s, numRows) {

    if (numRows === 1 || numRows > s) return s;

    let res = [];

    for (let i = 0; i < numRows; i++){

        let down = true;

        helper(down,i,numRows);

    }

    function helper (toDown,row, numberOfRows){

        if (row+1 === numberOfRows) toDown = false;

        let distance = 0;

        res.push(s[row])

        while (s[row + distance]){

            if (toDown){
                distance +=2 * (numRows - (row +1));
            }else {
                distance += 2 * ((row+1) -1);
            }
            if (s[row+distance]) res.push(s[row+distance]);

            if (row !== 0 && row !== numberOfRows -1){
                toDown = !toDown;
            }
        }
    }

    return res.join("");

};
