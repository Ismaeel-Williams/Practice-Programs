function sumUpTo(max){
    let a = 0
    for (let i = 1; i<=max; i++){
        a += i
    }
    return a
}

console.log(sumUpTo(4)); // 10
console.log(sumUpTo(5)); // 15
console.log(sumUpTo(2)); // 3