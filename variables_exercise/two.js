let apple;
console.log(apple); //undefined

apple = 5;
console.log(apple); //5

apple + 1;
console.log(apple); //6 <5

apple += 1;
console.log(apple); //7 <6

let banana = apple;
console.log(banana); //7 <6

banana = banana / 2;
console.log(banana); //2.3 <3

console.log(apple); //7 <6