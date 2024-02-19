function removeVowels(str){
    let s = ""
    let vowels = "aeiou"
    for(let i = 0; i < str.length; i++){
        if(vowels.indexOf(str[i]) === -1){
            s += str[i]
        }
    }
    return s
}

console.log(removeVowels("jello")); // jll
console.log(removeVowels("sensitivity")); // snstvty
console.log(removeVowels("cellar door")); // cllr dr