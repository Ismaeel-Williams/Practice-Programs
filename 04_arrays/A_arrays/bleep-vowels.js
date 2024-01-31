function bleepVowels(str){
    let vowels = "aeiou"
    let a = ""
    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i])){
            a += "*"
        } else {
            a += str[i]
        }
    }
    return a
}

console.log(bleepVowels("skateboard")); // 'sk*t*b**rd'
console.log(bleepVowels("slipper")); // 'sl*pp*r'
console.log(bleepVowels("range")); // 'r*ng*'
console.log(bleepVowels("brisk morning")); // 'br*sk m*rn*ng'