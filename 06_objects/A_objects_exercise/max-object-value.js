function maxObjectValue(obj){
    let maxKey = null;
    let maxValue =  0;
    for( let key in obj){
        if(obj[key] > maxValue){
            maxKey = key;
            maxValue = obj[key];
        }
    }
    return [maxKey, maxValue]
}

console.log(maxObjectValue({ a: 5, b: 2, c: 6, d: 7, e: 4 })); // ['d', 7]
console.log(maxObjectValue({ lychee: 11, rambutan: 13, papaya: 9 })); // ['rambutan', 13]
