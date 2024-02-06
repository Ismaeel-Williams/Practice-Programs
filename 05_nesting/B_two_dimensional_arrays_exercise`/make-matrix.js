function makeMatrix(h, w, value){
    let matrix = []
    for(let i = 0; i < h; i++){
        let arr = []
        for(let j = 0;j < w; j++){
            arr.push(value)
        }
        matrix.push(arr)
    }
    return matrix
}
 
  console.log(makeMatrix(3, 5, null));
  // [
  //   [ null, null, null, null, null ],
  //   [ null, null, null, null, null ],
  //   [ null, null, null, null, null ]
  // ]
  
  console.log(makeMatrix(4, 2, "x"));
  // [
  //   [ 'x', 'x' ],
  //   [ 'x', 'x' ],
  //   [ 'x', 'x' ],
  //   [ 'x', 'x' ]
  // ]
  
  console.log(makeMatrix(2, 2, 0));
  // [
  //   [ 0, 0 ],
  //   [ 0, 0 ]
  // ]