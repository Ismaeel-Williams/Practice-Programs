function shortenLongWords(str){
    let s = "";
    let words = str.split(" ");
    let vowels = "aeiouAEIOU";

    for(let i = 0; i < words.length; i++){
        if(words[i].length >= 5){ // Check if the length of the current word is 5 or more
            let shortenedWord = "";
            for(let j = 0; j < words[i].length; j++){
                if(!vowels.includes(words[i][j])){
                    shortenedWord += words[i][j];
                }
            }
            s += shortenedWord + " ";
        } else {
            s += words[i] + " ";
        }
    }
    return s.trim(); 
}

console.log(shortenLongWords("they are very noble people")); // 'they are very nbl ppl'
console.log(shortenLongWords("stick with it")); // 'stck with it'
console.log(shortenLongWords("ballerina, you must have seen her")); // 'bllrna, you must have seen her'