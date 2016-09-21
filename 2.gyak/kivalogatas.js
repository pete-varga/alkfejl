"use strict";

//var, let, const
const szamok = [2, 4, 3, 6, -4, 3, -42, -1];

function kivalogatas(arr, tulajdonsag) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if(tulajdonsag(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(kivalogatas(szamok, function negative(p){
    return p < 0;
}) );

console.log(szamok.filter(function negative(p){
    return p < 0;
}) );

console.log(szamok.filter(p => p < 0));
