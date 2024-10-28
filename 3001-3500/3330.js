var possibleStringCount = function(word) {
    set = new Set()
    counter = 0

    for (i = 0; i < word.length; i++) {
        if (!set.has(word[i])) {
            set.add(word[i])
        } else if (set.has(word[i]) && word[i-1] == word[i]) {
            counter++
        }
    }

    return ++counter
};
