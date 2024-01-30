function removeCapitals(str){
    let string = ""
    for (let i = 0; i < str.length; i++){
        if(str[i]=== str[i].toLowerCase()){
            string += str[i]           
        }
    }
    console.log(string);
}

removeCapitals("fOrEver"); // 'frver'
removeCapitals("raiNCoat"); // 'raioat'
removeCapitals("cElLAr Door"); // 'clr oor'