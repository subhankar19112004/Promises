const pr = new Promise(function exec(res, rej) {
    console.log("executer callback triggered by promise constructor");
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 100);
        console.log(randomNumber);
        if (randomNumber % 2 === 0) {
            //random number is even
            res();
        } else {
            //random number is odd
            rej();
        }
    }, 5000);
});


console.log("created the promise object");
console.log(pr);