#!/usr/bin/env node

function fibs(num){
    
    let numArr = [0, 1];
       
    for(let i = 2; i < num; i++){

       
            numArr.push(numArr[i - 1] + numArr[i -2])
     

    }
    return numArr.slice(0, num);
}

console.log(fibs(8));

function fibsRec(num){
    let memo = { 0: [0], 1: [0, 1] };

    if(num <= 0) return [0];
    if(num === 1) return [0, 1];

    if(!memo[num -1]) memo[num - 1] = fibsRec(num - 1, memo);
    if(!memo[num - 2]) memo[num - 2] = fibsRec(num -2, memo);

    const result = [...memo[num - 1], memo[num - 1].slice(-1)[0] + memo[num - 1].slice(-2, -1)[0]];
    memo[num] = result;

    return result;
}
console.log(fibsRec(8))