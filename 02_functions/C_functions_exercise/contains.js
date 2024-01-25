function contains(str1, str2){
    let s1 = str1.toLowerCase()
    let s2 = str2.toLowerCase()
    if(s1.indexOf(s2) > -1 ){
        console.log(true)
    } else {
        console.log(false)
    }
}

contains("caterpillar", "pill"); // true
contains("lion's share", "on"); // true
contains("SORRY", "or"); // true
contains("tangent", "gem"); // false
contains("clock", "ok"); // false