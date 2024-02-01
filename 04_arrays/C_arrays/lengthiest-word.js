function lengthiestWord(sentence){
    let words = sentence.split(" ");
    let w = ""
    for(let i = 0; i < words.length; i++){
        if (words[i] > w){
            w = words[i]
        }
    }
    return w
}

console.log(lengthiestWord("I am pretty hungry")); // 'hungry'
console.log(lengthiestWord("we should think outside of the box")); // 'outside'
console.log(lengthiestWord("down the rabbit hole")); // 'rabbit'
console.log(lengthiestWord("simmer down")); // 'simmer'