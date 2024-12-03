var addSpaces = function(s, spaces) {
    let arr=[]
    arr.push(s.slice(0,spaces[0]))
    for(let i=1;i<spaces.length;i++){
        arr.push(s.slice(spaces[i-1],spaces[i]))
    }
    arr.push(s.slice(spaces.at(-1)))
    arr=arr.join(' ')
    return arr
};
