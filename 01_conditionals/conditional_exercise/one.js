//snippet 1-0
//false
//true
//prints "swish" "pos"
let qty = 38;

if (qty > 30 && qty % 5 === 4) {
    console.log("swish");
} else {
    console.log("swoosh");
} 

if (qty > 0) {
    console.log("pos")
}

// snippet 1-1
//false
//true
//prints "beta"
let a = "celery";
let b = "SQUASH";

if (a === a.toUpperCase()) {
  console.log("alpha");
}

if (b === b.toUpperCase()) {
  console.log("beta");
}

// snippet 1-2
//true
//prints "ding"
let number = 9;

if (number > 4) {
  console.log("ding");
} else if (number % 3 === 0) {
  console.log("dong");
}

// snippet 1-3
//true
//true
//prints "vroom" "skrrt"
let z = 12;

if (z > 10) {
  console.log("vroom");
}

if (z % 3 === 0) {
  console.log("skrrt");
}