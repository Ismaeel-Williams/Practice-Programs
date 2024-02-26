function wordReplace(str, obj){
    let words = str.split(" ");
    let a = []
    for(let i = 0; i < words.length; i++){
        if(words.hasOwnProperty(words[i])){
            a.push(obj[words[i]])
        } else {
            a.push(words[i])
        }
    }
    return a.join(" ");
}

console.log(wordReplace("I never take naps during the day", { never: "always", day: "weekend" }));
// 'I always take naps during the weekend'

console.log(wordReplace("the park is closed", { closed: "open", the: "a" }));
// 'a park is open'

console.log(wordReplace("I do what I want", { I: "we", cat: "dog" }));
// 'we do what we want'