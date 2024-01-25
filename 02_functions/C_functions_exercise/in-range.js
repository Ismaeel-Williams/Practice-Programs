function inRange(min, max, n) {
    if (min <= n && n <=max) {
        console.log(true)
    } else {
        console.log(false)
    }
}

inRange(5, 13, 8); // true
inRange(5, 13, 29); // false
inRange(100, 125, 100); // true
inRange(100, 125, 99); // false
inRange(40, 45, 44); // true
inRange(40, 45, 45); // true
inRange(40, 45, 46); // false