function removeShortWords(str){
    let words = str.split(" ");
    let string = []

    for (let i = 0; i < words.length; i++){
        if (words[i].length >= 4){
            string.push(words[i])
        }
    }
    return string.join(" ")

}


console.log(removeShortWords("knock on the door will you")); // 'knock door will'
console.log(removeShortWords("a terrible plan")); // 'terrible plan'
console.log(removeShortWords("run faster that way")); // 'faster that'
