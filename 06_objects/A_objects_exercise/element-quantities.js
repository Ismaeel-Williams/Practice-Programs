function elementQuantities(obj){
    let arr = []
    for (let key in obj) {
        for (let i = 0; i < obj[key]; i++) {
            arr.push(key);
        }
    }
    return arr
}

let quantities1 = { cat: 3, bird: 1, dog: 2 };
console.log(elementQuantities(quantities1)); // ['cat', 'cat', 'cat', 'bird, 'dog', 'dog']

let quantities2 = { blue: 3, brown: 1 };
console.log(elementQuantities(quantities2)); // ['blue', 'blue', 'blue', 'brown']