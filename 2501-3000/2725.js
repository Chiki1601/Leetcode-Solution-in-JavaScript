var cancellable = function(fn, args, t) {
    let stop = false;
    fn(...args);

    const startTimer = () => {
        setTimeout(() => {
            fn(...args);
            if (stop) return;
            startTimer();
        }, t)
    }

   startTimer();

    const stopF = () => {
        stop = true;
    }

    return stopF;
};
