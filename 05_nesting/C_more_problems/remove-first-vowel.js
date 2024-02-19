function removeFirstVowel(str){
    let s = "";
    let foundFirstVowel = false;
    let vowels = "aeiouAEIOU";

    for(let i = 0; i < str.length; i++){
        if (!foundFirstVowel && vowels.includes(str[i])) {
            foundFirstVowel = true;
            continue;
        }
        s += str[i];
    }
    return s
    
}

console.log(removeFirstVowel("volcano")); // 'vlcano'
console.log(removeFirstVowel("celery")); // 'clery'
console.log(removeFirstVowel("juice")); // 'jice'