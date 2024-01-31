let arr = []

function stayPositive(arr){ 
    let a = []
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            a.push(arr[i])
        }
    }
    return a
}

console.log(stayPositive([10, -4, 3, 6])); // [10, 3, 6]
console.log(stayPositive([-5, 11, -40, 30.3, -2])); // [11, 30.3]
console.log(stayPositive([-11, -30])); // []