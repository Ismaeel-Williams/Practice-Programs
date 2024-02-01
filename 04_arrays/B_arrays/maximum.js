function maximum(arr){
    if (arr.length === 0){
        return null
    }
    let n = 0 
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > n){
            n = arr[i]
        }
    }
    return n
}

console.log(maximum([5, 6, 3, 7])); // 7
console.log(maximum([17, 15, 19, 11, 2])); // 19
console.log(maximum([])); // null