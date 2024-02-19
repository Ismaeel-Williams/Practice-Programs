function removeDupes(arr){
    let a = []
    let b = []
    for(let i = 0; i < arr.length; i ++){
        if(a.includes(arr[i])){
            b.push(arr[i])
        } else {
            a.push(arr[i])
        }
    }
    return a
}

console.log(removeDupes(["x", "y", "y", "x", "z"])); // ['x', 'y', 'z']
console.log(removeDupes([false, false, true, false])); // [false, true]
console.log(removeDupes([42, 5, 7, 42, 7, 3, 7, 7])); // [42, 5, 7, 3]