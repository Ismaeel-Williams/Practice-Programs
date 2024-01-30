function productUpTo(max){
    let n = 1
    for (let i = 1; i <=max; i++){
        n *= i
    }
    console.log(n)
}

productUpTo(4); // 24
productUpTo(5); // 120
productUpTo(7); // 5040