function printCombinations(arr1, arr2){
    for (let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            console.log(arr1[i] + " " + arr2[j])
        }
    }
}

let colors = ["gray", "cream", "cyan"];
let clothes = ["shirt", "flannel"];
printCombinations(colors, clothes);
// prints
//  gray shirt
//  gray flannel
//  cream shirt
//  cream flannel
//  cyan shirt
//  cyan flannel

printCombinations(["hot", "cold"], ["soup", "tea"]);
// prints
//  hot soup
//  hot tea
//  cold soup
//  cold tea