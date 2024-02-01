function reverseArray(arr){
    let a = []
    for (let i = 0; i < arr.length; i++){
        a.unshift(arr[i])
    }
    return a
}

console.log(reverseArray(["zero", "one", "two", "three"])); // ['three', 'two', 'one', 'zero']
console.log(reverseArray([7, 1, 8])); // [8, 1, 7]