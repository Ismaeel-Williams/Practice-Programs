// snippet 0-1
let greet = function() {
    console.log("hey");
    console.log("programmers");
}

let whistle = function () {
    console.log("doot");
}

console.log("first");
console.log("second");
greet();
console.log("third");
console.log("fourth");
whistle();

//snippet 0-2
let howMany = function () {
    return 42
}

console.log(howMany);
console.log(howMany());

const theAnswer = howMany();
console.log(theAnswer);

let howMuch = function () {
  5;
};
console.log(howMuch());

// snippet 0-3
let average = function (num1, num2) {
  console.log("calculating...");
  return (num1 + num2) / 2;
};

console.log(average(5, 10));
console.log(average(20, 26));
console.log(average(50, 100) + 2);

let a = 21 + 3;
let b = 20;
let n = average(a, b);
console.log(average(n, 18));

// snippet 0-4
let exclaim = function (str) {
    let capitalized = str.toUpperCase();
    return capitalized + "!!";
  };
  
  let result = exclaim("potato");
  console.log(result);
  console.log(result.length);
  console.log(result[0]);
  console.log(result[result.length - 1]);