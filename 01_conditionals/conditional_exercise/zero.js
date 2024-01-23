//snippet 0-1  
//print foo

if (true) {
    console.log("foo");
}

if (false) {
    console.log("bar");
}

//snippet 0-2 
// false
// true
//prints "beep"
if (false || false) {
    console.log("boop");
  }
  
  if (true || false) {
    console.log("beep");
  }

//snippet 0-3 
//true 
//true
//prints "zip" "zap"
let num = 40;

 if (num > 0) {
    console.log("zip");
 }
 if (num % 2 === 0) {
    console.log("zoop");
 }

 //snippet 0-4
 //false
 //print nah
let word = "jeep"

if (word[0] === "d") {
    console.log("yer");
} else {
    console.log("nah");
}

//snippet 0-5 
//true
//print "ends in t"
//false
//prints "long"
let sentence = "roger that"

if (sentence [sentence.length - 1] === t) {
    console.log("ends in t");
} else {
    console.log ("does not end in t");
}

