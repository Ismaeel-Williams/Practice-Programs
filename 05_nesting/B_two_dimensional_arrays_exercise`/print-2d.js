function print2d(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            newArr.push(arr[i][j])
        }
    }
    console.log(newArr)
}

let array1 = [
    ["a", "b", "c", "d"],
    ["e", "f"],
    ["g", "h", "i"],
  ];
  print2d(array1);
  // prints
  //  a
  //  b
  //  c
  //  d
  //  e
  //  f
  //  g
  //  h
  //  i
  
  let array2 = [[9, 3, 4], [11], [42, 100]];
  print2d(array2);
  // prints
  //  9
  //  3
  //  4
  //  11
  //  42
  //  100