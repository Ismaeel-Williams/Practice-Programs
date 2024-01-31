function makeAcronym(str){
    let a = "";
    let words = str.split(" ")
    for(let i = 0; i < words.length; i++){
        a += words[i][0].toUpperCase()
    }
    return a
}

console.log(makeAcronym("New York")); // NY
console.log(makeAcronym("same stuff different day")); // SSDD
console.log(makeAcronym("Laugh out loud")); // LOL
console.log(makeAcronym("don't over think stuff")); // DOTS