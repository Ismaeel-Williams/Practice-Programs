// //snippet 1

let flim = function(){
    console.log("leak");
    flam();
    console.log("geek");
}

let flam = function() {
    console.log("beak");
    console.log("sneak");
}

flim();

// //snippet 2

let alice = function(n){
    for(let i = 0; i <= n ; i++){
        bob(i)
    }
}

let bob = function (n) {
    if(n % 2 ===0) {
        console.log("good")
    } else {
        console.log("bad");
    }
}

alice(4);

//snippet 3

let foo = function(){
    for(let i = 0; i < 5; i++){
        console.log("i = " + i);
        bar();
    }
};

let bar = function() {
    for(let j = 0; j < 5; j++){
        console.log(" j = " + j);
    }
};

foo();