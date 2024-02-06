function totalProduct(arr){
    let a = 1
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            a *= arr[i][j]
        }
    }
    return a
}

let array1 = [
    [3, 5, 2],
    [6, 2],
  ];
  console.log(totalProduct(array1)); // 360
  
  let array2 = [
    [4, 6],
    [2, 3],
    [1, 2],
  ];
  console.log(totalProduct(array2)); // 288