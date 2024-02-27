// Write a function `objectAdd` that accepts two objects as arguments. The function should return 
// a new object containing the same keys as the object arguments. If a key is found in both
// objects, its corresponding value should be the sum of the values in the object arguments. If a key 
// is only found in one of the objects, then it's corresponding value should be the same as that one 
// object.

function objectAdd(o1, o2){
    let object = {}
    for( let key in o1){
        if(o2.hasOwnProperty(key)){
            object[key] = o2[key] + o1[key]
        } else {
            object[key] = o1[key]
        }
    }
    for( let key in o2){
        if(!o1.hasOwnProperty(key)){
            object[key] = o2[key]
        }
    }
    return object
}

let obj1 = { x: 3, y: 10};
let obj2 = { y: 2, x: 1};
console.log(objectAdd(obj1, obj2)); // { x: 4, y: 12 } 

let obj3 = { a: 3, b: 2, c: -1};
let obj4 = { b: 5, c: 1, e: 4};
console.log(objectAdd(obj3, obj4)); // { a: 3, b: 7, c: 0, e: 4 }