function caseChange(str, b) {
    if (b === true) {
        console.log(str.toUpperCase())
    } else if (b === false){
        console.log(str.toLowerCase())
    }
}    

caseChange("Super", true); // 'SUPER'
caseChange("Super", false); // 'super'
caseChange("tAmBourine", true); // 'TAMBOURINE'
caseChange("tAmBourine", false); // 'tambourine'