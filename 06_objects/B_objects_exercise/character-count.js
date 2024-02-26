function characterCount(str){
    let letterKey = {}
    for(let i = 0; i < str.length; i++){
        if(!letterKey.hasOwnProperty(str[i])){
            letterKey[str[i]] = 1
        } else {
            letterKey[str[i]]++
        }        
    }
    return letterKey
}

console.log(characterCount("evening")); // { e: 2, v: 1, n: 2, i: 1 , g: 1 }
console.log(characterCount("mississippi")); // { m: 1, i: 4, s: 4, p: 2 }
console.log(characterCount("chili")); // { c: 1, h: 1, i: 2, l: 1 }