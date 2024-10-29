#!/usr/bin/env node

function mergeSort(arr){
    if(arr.length <= 1){
        return arr; 
    }
    const mid =  Math.floor(arr.length / 2);
    const leftArr = mergeSort(arr.slice(0, mid));
    const rightArr = mergeSort(arr.slice(mid));
   
    return merge(leftArr, rightArr);
}

function merge(left, right){
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}

console.log(mergeSort([0,3,6,1,2,5,4]));