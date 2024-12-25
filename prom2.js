const pr = new Promise ((res, rej) =>{
    console.log("Executer callback triggered by promise constructor");
    for(let i = 0; i < 100000; i++){
        console.log(i);
    }
});
console.log("created the promise object");
console.log(pr);