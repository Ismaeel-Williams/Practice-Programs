function noOhs(string) {
    let str = string.toLowerCase()
    for(let i = 0; i < str.length; i++){
        if (str[i] === "o"){    
        } else {
            console.log(str[i])
        }
    }
}

noOhs("cOde");
noOhs("school");