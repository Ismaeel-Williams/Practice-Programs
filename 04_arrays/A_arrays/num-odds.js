function numOdds(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 > 0){
            count += 1;
        }
    }
    return count;
}

console.log(numOdds([4, 7, 2, 5, 9])); // 3
console.log(numOdds([11, 31, 58, 99, 21, 60])); // 4
console.log(numOdds([100, 40, 4])); // 0