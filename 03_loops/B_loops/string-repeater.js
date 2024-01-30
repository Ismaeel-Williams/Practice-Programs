function stringRepeater(str, num){
    let string = ""
    for(let i = 1; i <= num; i++){
         string += str
    }
    console.log(string)
}

stringRepeater("q", 4); // 'qqqq'
stringRepeater("go", 2); // 'gogo'
stringRepeater("tac", 3); // 'tactactac'