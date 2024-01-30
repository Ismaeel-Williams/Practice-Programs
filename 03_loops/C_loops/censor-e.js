function censorE(str){
    let string = ""
    for(let i = 0; i < str.length; i++){
            string = str.toLowerCase().replaceAll("e", "*");
    }
    console.log(string)
}

censorE("speedy"); // 'sp**dy'
censorE("pending"); // 'p*nding'
censorE("scene"); // 'sc*n*'
censorE("heat"); // 'h*at'