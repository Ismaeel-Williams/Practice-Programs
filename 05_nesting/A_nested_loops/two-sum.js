function twoSum(number, target){
    for( let i = 0; i < number.length; i++){
        for (let j = i + 1; j < number.length; j++){
            if (number[i]+number[j] === target){
                return true 
            }
        }
    }
    return false
}

console.log(twoSum([2, 3, 5, 9], 7)); // true
console.log(twoSum([2, 3, 5, 9], 4)); // false
console.log(twoSum([6, 3, 4], 10)); // true
console.log(twoSum([6, 5, 1], 10)); // false