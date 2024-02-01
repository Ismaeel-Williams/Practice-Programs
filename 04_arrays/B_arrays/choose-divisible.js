function chooseDivisibles(arr, n){
    let a = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % n === 0){
            a.push(arr[i])
        }
    }
    return a
}

console.log(chooseDivisibles([40, 7, 22, 20, 24], 4)); // [40, 20, 24]
console.log(chooseDivisibles([9, 33, 8, 17], 3)); // [9, 33]
console.log(chooseDivisibles([4, 25, 1000], 10)); // [1000]