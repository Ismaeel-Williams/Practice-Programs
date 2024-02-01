function yourAverageFunction(arr){
    if (arr.length === 0) {
        return null;
    }
    let a = 0
    for(let i = 0; i < arr.length; i++){
        a += arr[i];
    }
    let b = a / arr.length
    return b
}

console.log(yourAverageFunction([5, 2, 7, 24])); // 9.5
console.log(yourAverageFunction([100, 6])); // 53
console.log(yourAverageFunction([31, 32, 40, 12, 33])); // 29.6
console.log(yourAverageFunction([])); // null