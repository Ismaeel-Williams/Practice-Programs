function mostCommonLetter(str){
    let obj = {}
    for(let i = 0; i < str.length; i++){
        if(obj.hasOwnProperty(str[i])){
            obj[str[i]] ++
        } else {
            obj[str[i]] = 1
        }
    }
    let letter = ""
    let value = 0
    for(let key in obj){
        if(value < obj[key]){
            value = obj[key]
            letter = key
        }
    }
    return letter
}

console.log(mostCommonLetter("building")); // 'i'
console.log(mostCommonLetter("shoestring")); // 's'
console.log(mostCommonLetter("preparedness")); // 'e'