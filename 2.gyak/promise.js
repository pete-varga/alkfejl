//convert2.js-hez

function waitFor(ms){
    return new Promise(function(resolve, reject){
        setTimeout(resolve, ms);
    });
}

waitFor(1000)
    .then(() => {
        return 7;    
    })
    .then(foo => console.log(foo))
console.log(2);