// snippet 1
//prints "hello" "code" 5 times "goodbye"
console.log("hello");

for (let i=0; i <5; i++) {
    console.log("code")
}

console.log("goodbye")

//snippet 2
//prints "hello" "programsx5" "3 4 5 6 7" "bye"
console.log("hi");

for (let i = 3; i <= 7; i++) {
  console.log("program");
  console.log(i);
}

console.log("bye");

//snippet 3
//prints "begin" "10 8 6 4 2" "end" "10 8 6 4 2"
let foo = function () {
  for (let num = 10; num > 0; num -= 2) {
    console.log(num);
  }
};

console.log("begin");
foo();
console.log("end");
foo();

//snippet 4
//prints "0 1 2 3 4 5" "s t r e e t"
let word = "street";
for (let i = 0; i < word.length; i++) {
  console.log(i);
  console.log(word[i]);
}

//snippet 5
//prints "1 2 3 4" "grand toat: 4"
let total = 0;
for ( let i = 1; i < 5; i++) {
  total += 1;
  console.log(total)
}

console.log("grand total: " + total)