function divByEither(num1, num2, max){
    for(let i = 1; i < max; i++){
        if (i % num1  === 0 || i % num2 === 0){
            console.log(i)
        }
    }
}

divByEither(4, 3, 16);
// prints
//  3
//  4
//  6
//  8
//  9
//  12
//  15

divByEither(7, 5, 20);
// prints
//  5
//  7
//  10
//  14
//  15