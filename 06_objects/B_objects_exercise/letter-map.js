function letterMap(str, obj){
    let s  = str.split("")
    for(let i = 0; i < s.length; i++){
        if(obj.hasOwnProperty(s[i])){
            s[i] = obj[s[i]]
        }
    }
    return s.join("");
}

console.log(letterMap("symbolic", { y: "i", o: "a", c: "k" })); // 'simbalik'
console.log(letterMap("colossal", { o: "x", s: "p" })); // 'cxlxppal'
console.log(letterMap("miniscule", { u: "t", i: "f", e: "q" })); // 'mfnfsctlq'