function divisible(num1, num2){
    if (num1 % num2 === 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}

divisible(12, 3); // true
divisible(12, 5); // false
divisible(60, 4); // true
divisible(60, 11); // false
divisible(21, 7); // true
divisible(21, 6); // false