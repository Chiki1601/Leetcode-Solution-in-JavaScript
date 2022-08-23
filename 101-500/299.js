/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var secretMap = {};
    var cow = 0;
    var bull = 0;

    for (var i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) bull++;
        else if (secretMap[secret[i]]) secretMap[secret[i]]++;
        else secretMap[secret[i]] = 1;
    }
    for (var j = 0; j < guess.length; j++) {
        if (guess[j] !== secret[j] && secretMap[guess[j]]) {
            cow++;
            secretMap[guess[j]]--;
        }
    }

    return bull + 'A' + cow + 'B';
};
