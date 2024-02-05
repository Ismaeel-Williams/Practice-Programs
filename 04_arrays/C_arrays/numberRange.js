function numberRange(min, max, step){
    let arr = [];
    for(let i = min; i <= max; i++){
        if (i % step === 0){
            arr.push(i)
        }
    }
    return arr
}

console.log(numberRange(10, 40, 5)); // [10, 15, 20, 25, 30, 35, 40]
console.log(numberRange(14, 24, 3)); // [14, 17, 20, 23]
console.log(numberRange(8, 35, 6)); // [8, 14, 20, 26, 32]