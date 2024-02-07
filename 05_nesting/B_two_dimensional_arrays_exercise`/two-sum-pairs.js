function twoSumPairs(arr, target){
    let array = []
    for (let i = 0; i < arr.length; i++){
        let a = []
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                a.push(arr[i], arr[j])
                array.push(a)
            }
        }       
    }
    return array
}

console.log(twoSumPairs([2, 3, 4, 6, 5], 8)); // [ [2, 6], [3, 5] ]
console.log(twoSumPairs([10, 7, 4, 5, 2], 12)); // [ [10, 2], [7, 5] ]
console.log(twoSumPairs([3, 9, 8], 11)); // [ [3, 8] ]
console.log(twoSumPairs([3, 9, 8], 10)); // [ ]