function oneOrNone(a, b){
    if (a === b) {
        console.log(false)
    } else {
        console.log(true)
    }
}

oneOrNone(false, false); // false
oneOrNone(true, false); // true
oneOrNone(false, true); // true
oneOrNone(true, true); //false