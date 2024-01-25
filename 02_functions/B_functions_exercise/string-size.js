function stringSize(str){
    if (str.length < 5){
        console.log("small")
    } else if (str.length ===5){
        console.log("medium")
    } else {
        console.log("large")
    }
}

stringSize("cat"); // 'small'
stringSize("bell"); // 'small'
stringSize("ready"); // 'medium'
stringSize("shirt"); // 'medium'
stringSize("shallow"); // 'large'
stringSize("intelligence"); // 'large'