function spam(arr){
    let str = ""
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i][1]; j++){
            str += arr[i][0]
            if (j < arr[i][1] - 1 || i < arr.length - 1) {
                str += ' ';
            }
        }
    }
    return str
}

let array1 = [
    ["hi", 3],
    ["bye", 2],
  ];
  console.log(spam(array1)); // 'hi hi hi bye bye'
  
  let array2 = [
    ["cat", 1],
    ["dog", 2],
    ["bird", 4],
  ];
  console.log(spam(array2)); // 'cat dog dog bird bird bird bird'