/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;
    let devisor = '';
    let temp = '';
    [str1, str2, len1, len2] = len1 > len2 ? [str2, str1, len2, len1] : [str1, str2, len1, len2];
    for (let i = 0; i < len1; i++) {
        if (str1[i] !== str2[i]) {
            return devisor;
        };
        temp += str1[i];
        if (str1.split(temp).length - 1 === len1 / (i + 1) && str2.split(temp).length - 1 === len2 / (i + 1)) {
            devisor = temp;
        };
    };
    return devisor;
};
