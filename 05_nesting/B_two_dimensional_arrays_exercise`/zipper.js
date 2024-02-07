function zipper(arr1, arr2){
    let n = Math.max(arr1.length, arr2.length);
    let array = []
    for(let i = 0; i < n; i++){
        let a = []
        for(let j = i; j < i+1; j++){
            if (j < arr1.length && j < arr2.length) {
                a.push(arr1[j], arr2[j]);
            } else if (j < arr1.length) {
                a.push(arr1[j], null);
            } else if (j < arr2.length) {
                a.push(null, arr2[j]);
            }
        }
        array.push(a)
    }
    return array
}

let array1 = ["a", "b", "c", "d"];
let array2 = [-1, -2, -3, -4];
console.log(zipper(array1, array2));
// [
//   ['a', -1],
//   ['b', -2],
//   ['c', -3],
//   ['d', -4],
// ]

let array3 = ["whisper", "talk", "shout"];
let array4 = ["quiet", "normal", "loud"];
console.log(zipper(array3, array4));
// [
//   ['whisper', 'quiet'],
//   ['talk', 'normal'],
//   ['shout', 'loud'],
// ]