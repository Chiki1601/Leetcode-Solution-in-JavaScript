/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {


    if( helper(0)) return true;

    return helper(1);

    function helper(bit) {

        let b = bit;

        for(let i = 0; i < derived.length - 1; i++) bit ^= derived[i];

        return b ^ bit == derived[derived.length - 1];
    }

    
};
