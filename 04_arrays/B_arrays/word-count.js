function wordCount(sentence, targetWords){
    let count = 0;
    let words = sentence.split(" ");
    for(let i = 0 ; i < words.length; i++){
        if(targetWords.includes(words[i])){
            count ++
        }
    }
    return count;
}

console.log(wordCount("open the window please", ["please", "open", "sorry"])); // 2
console.log(wordCount("drive to the cinema", ["the", "driver"])); // 1
console.log(wordCount("can I have that can", ["can", "I"])); // 3