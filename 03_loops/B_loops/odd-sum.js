function oddSum(max){
    let a = 0
   for (let i = 1;i <= max; i+=2){
    a += i
   }
   console.log(a)
}

oddSum(10); // 25
oddSum(5); // 9