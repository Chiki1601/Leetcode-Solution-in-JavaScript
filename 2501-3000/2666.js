var once = function(fn) {
    let isFunctionCalled = false;
    
    return function(...args){
        if(!isFunctionCalled){
            isFunctionCalled = true;
            return fn(...args);
        }
    }
};
