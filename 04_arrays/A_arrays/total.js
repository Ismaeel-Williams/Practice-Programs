let arr = [];
function total(arr){
    let a = 0
    for(let i = 0; i < arr.length; i++){
        a += arr[i]
    }
    return a
}

console.log(total([3, 2, 8])); // 13
console.log(total([-5, 7, 4, 6])); // 12
console.log(total([7])); // 7
console.log(total([])); // 0