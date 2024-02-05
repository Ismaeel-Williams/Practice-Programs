function commonElements(a, b){
    let c = [];   
    for(let i = 0; i < a.length; i++){
        if(b.includes(a[i])){
            c.push(a[i]);
        }
    }
    return c
}

let arr1 = ["a", "c", "d", "b"];
let arr2 = ["b", "a", "y"];
console.log(commonElements(arr1, arr2)); // ['a', 'b']

let arr3 = [4, 7];
let arr4 = [32, 7, 1, 4];
console.log(commonElements(arr3, arr4)); // [4, 7]
