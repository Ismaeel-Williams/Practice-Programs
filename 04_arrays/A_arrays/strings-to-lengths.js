function  stringsToLengths(arr){
    let a = []
    for(let i = 0; i < arr.length; i++){
        a.push(arr[i].length)
    }
    return a
}

console.log(stringsToLengths(["belly", "echo", "irony", "pickled"]));
// [5, 4, 5, 7]

console.log(stringsToLengths(["on", "off", "handmade"]));
// [2, 3, 8]