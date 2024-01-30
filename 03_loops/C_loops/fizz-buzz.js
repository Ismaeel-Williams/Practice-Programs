function fizBuzz(max){
    for (let i = 0; i <= max; i++){
        if (i % 3 === 0 ) {
            console.log(i)
        } else if (i % 5 === 0){
            console.log(i)
        }           
    }
}

fizBuzz(18);
// prints
//  3
//  5
//  6
//  9
//  10
//  12
//  18

fizBuzz(33);
// prints
//  3
//  5
//  6
//  9
//  10
//  12
//  18
//  20
//  21
//  24
//  25
//  27
//  33